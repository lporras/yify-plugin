'use strict';

var JST = JST || {};

YifyPlugin.module('MovieList.Views', function (Views, App, Backbone, Marionette, $) {
  // Movie List Item View
  // -------------------
  //
  // Display an individual movie item, and respond to changes
  // that are made to the item
  Views.ItemView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'span5',
    events: {
      "click a.streamTorrent": "streamTorrent",
      "click a.downloadTorrent": "downloadTorrent"
    },
    initialize: function(){
      _.bindAll(this, 'streamTorrent')
    },

    template: function (serialized_model){
      return Handlebars.templates.movieItem(serialized_model)
    },

    downloadTorrent: function(event){
      /*event.stopPropagation();
      event.preventDefault();
      debugger;
      chrome.tabs.create({url: this.model.get("TorrentUrl")})
      return false;
      */
      console.log("download Torrent: "+ this.model.get("TorrentUrl"));
    },

    streamTorrent: function(event){
      var thisView = this;
      chrome.tabs.create({url: 'chrome-extension://' + chrome.i18n.getMessage("@@extension_id") + '/movie.html#' + this.model.id});
      return false;
    }
  });

  Views.PaginationView = Backbone.View.extend({
    className: "pagination pagination-centered",

    initialize: function(){
      this.collection.on("reset", this.render, this);
      this.render();
    },

    render: function(){
      this.$el.empty();
      if(this.collection.length > 0){
        this.$el.pagination({
          items: this.collection.totalRecords,
          itemsOnPage: this.collection.perPage,
          currentPage: this.collection.currentPage,
          displayedPages: 6,
          edges: 1,
          hrefTextPrefix: "#/movies/page/"
        });
      }

      return this;
    }

  });

  Views.SearchFormView = Backbone.View.extend({
    events: {
      'submit form'       : 'submitForm'
    },

    initialize: function(options){
      _.bindAll(this, 'submitForm');
      this.ui = {};
      this.render();
    },

    reformat: function(array){
      var obj = {};
      for(var i=0; i<array.length; i++){
        var a = array[i];
        var name = a.name;
        var value = a.value;
        obj[name] = value;
      }
      return obj;
    },

    render: function(){
      this.setValues();
      return this;
    },

    setValues: function(){
      this.ui.keywords = this.$el.find("input#keywords");
      this.ui.quality = this.$el.find("select#form_Quality");
      this.ui.rating = this.$el.find("select#form_Rating");
      this.ui.orderBy = this.$el.find("select#form_orderBy");
      this.ui.genre = this.$el.find("select#form_Genre");

      if(this.collection.server_api.hasOwnProperty("keywords") && this.collection.server_api.keywords.length >= 1){
        this.ui.keywords.attr("value", this.collection.server_api.keywords);
      }else{
        this.ui.keywords.attr("value", "");
      }


      var quality = this.collection.quality;
      this.ui.quality.find("option").filter(function() {
        //may want to use $.trim in here
        return $(this).text() == quality;
      }).prop('selected', true);

      var rating = this.collection.rating;
      this.ui.rating.find("option").filter(function() {
        //may want to use $.trim in here
        return $(this).val() == rating;
      }).prop('selected', true);

      var orderBy = this.collection.orderBy();

      this.ui.orderBy.find("option").filter(function() {
        //may want to use $.trim in here
        return $(this).val() == orderBy;
      }).prop('selected', true);

      var genre = this.collection.genre;
      this.ui.genre.find("option").filter(function() {
        //may want to use $.trim in here
        return $(this).text() == genre;
      }).prop('selected', true);
    },

    submitForm: function(e){
      e.preventDefault();
      e.stopPropagation();
      var formHash = this.reformat($(e.target).serializeArray());
      this.collection.search(formHash);
    }
  });

  // List View
  // --------------
  //
  // Controls the rendering of the list of items

  Views.ListView = Backbone.Marionette.CompositeView.extend({
    className: "row",
    itemView: Views.ItemView,
    itemViewContainer: '#movie-list',

    template: function (serialized_model){
      return Handlebars.templates.movieList(serialized_model)
    },

    ui: {
      moviesSearch: "#movies-search",
      moviesCount: "#movies-count .count",
      movieList: "#movie-list",
      pagination: ".movies-pagination"
    },

    initialize: function(options){
      _.bindAll(this, 'updateCount', 'ajaxSend', 'showLoading', 'ajaxSuccess')
      //this.collection.on('reset', this.updateCount, this)
      this.collection.on('ajaxSend', this.showLoading)
      this.collection.on('ajaxSuccess', this.render);

      $(document).ajaxSend(this.ajaxSend);
      $(document).ajaxSuccess(this.ajaxSuccess);
    },

    updateCount: function(){
      this.ui.moviesCount.html(this.collection.totalRecords);
    },

    ajaxSend: function(event, jqXHR, ajaxOptions){
      if(/api\/list/.test(ajaxOptions.url)){
        this.collection.trigger("ajaxSend")
      }
    },

    ajaxSuccess: function(event, XMLHttpRequest, ajaxOptions){
      if(/api\/list/.test(ajaxOptions.url)){
        this.collection.trigger("ajaxSuccess");
      }
    },

    showLoading: function(){
      this.ui.movieList.html("<p class='loading'><img src='/img/loading.gif'/>Loading...</p>");
      //this.ui.pagination.empty();
    },

    onRender: function(){
      this.searchFormView = new Views.SearchFormView({collection: this.collection, el: this.ui.moviesSearch});
      this.updateCount();
      this.ui.pagination.html(new Views.PaginationView({collection: this.collection}).render().el)
    },

  });

});
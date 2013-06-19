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
      this.$el.pagination({
        items: this.collection.totalRecords,
        itemsOnPage: this.collection.perPage,
        currentPage: this.collection.currentPage,
        displayedPages: 6,
        edges: 1,
        hrefTextPrefix: "#/movies/page/"
      });
      return this;
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
      this.updateCount();
      this.ui.pagination.html(new Views.PaginationView({collection: this.collection}).render().el)
    },

  });

});
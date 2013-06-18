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
    //template: '#template-movieItemView'
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

  // Item List View
  // --------------
  //
  // Controls the rendering of the list of items

  Views.ListView = Backbone.Marionette.CompositeView.extend({
    className: "row",
    itemView: Views.ItemView,
    itemViewContainer: '#movie-list',
    template: function (serialized_model){
      return Handlebars.templates.movieList(serialized_model)
    }

    /*appendHtml: function(collectionView, itemView, index){
      var resultOfMod = index % 3;
      if(resultOfMod == 0){
        itemView.$el.addClass("no-pagging");
      }
      collectionView.$("#movie-list").append(itemView.el);
    }*/
  });

});
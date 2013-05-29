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
    className: 'browse-wrapper',
    //template: '#template-movieItemView'
    template: function (serialized_model){
      return Handlebars.templates.movieItem(serialized_model)
    }
  });

  // Item List View
  // --------------
  //
  // Controls the rendering of the list of items

  Views.ListView = Backbone.Marionette.CompositeView.extend({
    itemView: Views.ItemView,
    //itemViewContainer: '#movie-list',
    template: function (serialized_model){
      return Handlebars.templates.movieList(serialized_model)
    },

    appendHtml: function(collectionView, itemView, index){
      var resultOfMod = index % 3;
      if(resultOfMod == 0){
        itemView.$el.addClass("no-pagging");
      }
      collectionView.$("#movie-list").append(itemView.el);
    }
  });

});
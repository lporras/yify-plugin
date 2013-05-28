'use strict';

var JST = JST || {};

YifyPlugin.module('MovieList.Views', function (Views, App, Backbone, Marionette, $) {
  // Movie List Item View
  // -------------------
  //
  // Display an individual movie item, and respond to changes
  // that are made to the item
  Views.ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    //template: '#template-movieItemView'
    template: function (serialized_model){
      debugger;
      return Handlebars.templates.movieItem(serialized_model)
      //JST.movieItem = _.template($("#template-movieItemView").html()).source;
      //return JST.movieItem;
    }
  });

  // Item List View
  // --------------
  //
  // Controls the rendering of the list of items

  Views.ListView = Backbone.Marionette.CompositeView.extend({
    itemView: Views.ItemView,
    itemViewContainer: '#movie-list',
    template: function (serialized_model){
      debugger;
      return Handlebars.templates.movieList(serialized_model)
    }
  });

});
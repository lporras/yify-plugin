'use strict';

YifyPlugin.module('MovieList', function (MovieList, App, Backbone, Marionette, $, _) {
  // MovieList Router
  // ---------------
  //
  MovieList.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '*filter': 'filterItems'
    }
  });

  // MovieList Controller (Mediator)
  // ------------------------------
  //
  // Control the workflow and logic that exists at the application
  // level, above the implementation detail of views and models
  MovieList.Controller = function () {
    this.movieList = new App.Movies.MovieList();
  };

  _.extend(MovieList.Controller.prototype, {
    // Start the app by showing the appropriate views
    // and fetching the list of todo items, if there are any
    start: function () {
      this.showMovieList(this.movieList);
      this.movieList.fetch();
    },

    showMovieList: function (movieList){
      App.main.show(new MovieList.Views.ListView({
        collection: movieList
      }));
    },

    // Set the filter to show complete or all items
    filterItems: function (filter) {
      console.log(filter);
      filter = filter || "";
      App.vent.trigger('MovieList:filter', filter.trim() || '');
    }

  });

  // MovieList Initializer
  // --------------------
  //
  // Get the MovieList up and running by initializing the mediator
  // when the the application is started, pulling in all of the
  // existing Todo items and displaying them.
  MovieList.addInitializer(function () {
    var controller = new MovieList.Controller();
    controller.router = new MovieList.Router({
      controller: controller
    });

    controller.start();
  });

});
'use strict';

YifyPlugin.module('MovieList', function (MovieList, App, Backbone, Marionette, $, _) {
  // MovieList Router
  // ---------------
  //
  MovieList.Router = Marionette.AppRouter.extend({
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

    },

    showMovieList: function (movieList){
      var movieListView = new MovieList.Views.ListView({
        collection: movieList
      });
      App.main.show(movieListView);
      //movieList.pager({success: function(){ movieList.trigger("ajaxSuccess") } });
      this.movieList.pager();
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
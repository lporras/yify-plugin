'use strict';

YifyPlugin.module('MovieStreaming', function (MovieStreaming, App, Backbone, Marionette, $, _) {
  // MovieStreaming Router
  // ---------------
  //
  MovieStreaming.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '*movieId': 'streamMovie'
    }
  });

  MovieStreaming.Controller = function () {
    this.movie = new App.Movies.Movie();
  };

  _.extend(MovieStreaming.Controller.prototype, {
    // Start the app by showing the appropriate views
    // and fetching the list of todo items, if there are any
    start: function () {
    },

    streamMovie: function (movieId){
      this.movie.set("MovieID", movieId);
      this.movie.url = "http://yify-torrents.com/api/movie.json?id=" + this.movie.id
      this.movie.fetch({success: this.showMovie});
    },

    showMovie: function (model, response, options){
      var movieAppLayout = new App.Btapp.Views.MovieAppLayout({
        model: model
      });
      App.main.show(movieAppLayout);
      movieAppLayout.content.show(new App.Btapp.Views.ContentView({model: model}))
      //var contentLayout = new App.Btapp.Views.ContentLayout({model: model});
      //movieAppLayout.content.show(contentLayout);
    }

  });

  // MovieStreaming Initializer
  // --------------------
  //
  // Get the MovieStreamin up and running by initializing the mediator
  // when the the application is started, pulling in all of the
  // existing Todo items and displaying them.
  MovieStreaming.addInitializer(function () {
    var controller = new MovieStreaming.Controller();
    controller.router = new MovieStreaming.Router({
      controller: controller
    });
    controller.start();
  });

});
YifyPlugin.module('Movies', function(Movies, App, Backbone, Marionette, $, _) {

  // Local Variables
  // ---------------

  //var localStorageKey = 'todos-backbone-marionettejs';

  // Movie Model
  // ----------

  Movies.Movie = Backbone.Model.extend({
    //localStorage: new Backbone.LocalStorage(localStorageKey),

    urlRoot: "http://yify-torrents.com/api/movie",

    idAttribute: "MovieID",

    initialize: function() {
    }
  });

  // Movie Collection
  // ---------------

  Movies.MovieList = Backbone.Collection.extend({
    model: Movies.Movie,
    url: "http://yify-torrents.com/api/list?limit=24",

    parse: function(response){
      this.MovieCount = response.MovieCount;
      return response.MovieList;
    }
  });

  Movies.addInitializer(function() {
    window.moviesList = new Movies.MovieList();
  });

});
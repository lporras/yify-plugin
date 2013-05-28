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

    //localStorage: new Backbone.LocalStorage(localStorageKey),

    /*

    getCompleted: function() {
      return this.filter(this._isCompleted);
    },

    getActive: function() {
      return this.reject(this._isCompleted);
    },

    comparator: function(todo) {
      return todo.get('created');
    },

    _isCompleted: function(todo){
      return todo.isCompleted();
    }
    */

  });

  Movies.addInitializer(function() {
    window.moviesList = new Movies.MovieList();
  });

});
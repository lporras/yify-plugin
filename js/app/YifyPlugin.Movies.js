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

  Movies.MovieList = Backbone.Paginator.requestPager.extend({
    model: Movies.Movie,
    //url: "http://yify-torrents.com/api/list?limit=24",

    paginator_core: {
      // the type of the request (GET by default)
      type: 'GET',

      dataType: 'json',

      // the URL (or base URL) for the service
      url: 'http://yify-torrents.com/api/list?'
    },

    paginator_ui: {
      // the lowest page index your API allows to be accessed
      firstPage: 1,

      // which page should the paginator start from
      // (also, the actual page the paginator is on)
      currentPage: 1,

      // how many items per page should be shown
      perPage: 24,

      // a default number of total pages to query in case the API or
      // service you are using does not support providing the total
      // number of pages for us.
      // 10 as a default in case your service doesn't return the total
      totalPages: 1,

      totalRecords: 0
    },

    server_api: {
      // number of items to return per request/page
      'limit': function() { return this.perPage },

      // number of page
      'set': function() { return this.currentPage },

      // field to sort by
      'sort': function() {
        if(this.sortField === undefined)
          return 'date';
        return this.sortField;
      },

      'quality': function(){
        if(this.quality === undefined)
          return 'ALL'
        return this.quality;
      },

      'rating': function(){
        if(this.rating === undefined)
          return 0
        return this.rating;
      },

      'format': 'json',

    },

    parse: function(response){
      this.totalRecords = parseInt(response.MovieCount);
      this.totalPages = Math.floor(this.totalRecords / this.perPage);
      return response.MovieList;
    }
  });

});
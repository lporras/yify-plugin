YifyPlugin.module('Movies', function(Movies, App, Backbone, Marionette, $, _) {

  // Local Variables
  // ---------------

  //var localStorageKey = 'todos-backbone-marionettejs';

  // Movie Model
  // ----------

  Movies.Movie = Backbone.Model.extend({
    //localStorage: new Backbone.LocalStorage(localStorageKey),

    urlRoot: "https://yts.mx/api/v2/movie_details.json",

    idAttribute: "movie_id",

    initialize: function() {
    }
  });

  // Movie Collection
  // ---------------

  Movies.MovieList = Backbone.Paginator.requestPager.extend({
    model: Movies.Movie,

    paginator_core: {
      // the type of the request (GET by default)
      type: 'GET',

      dataType: 'json',

      // the URL (or base URL) for the service
      url: 'https://yts.mx/api/v2/list_movies.json?'
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
      'sort_by': function() {
        if(this.sortField === undefined)
          return 'date_added';
        return this.sortField;
      },

      'order_by': function(){
        if(this.orderField === undefined)
          return 'desc'
        return this.orderField;
      },

      'quality': function(){
        if(this.quality === undefined)
          return 'All'
        return this.quality;
      },

      'genre': function(){
        if(this.genre === undefined)
          return ''
        return this.genre;
      },

      // 'rating': function(){
      //   if(this.rating === undefined)
      //     return 0
      //   return this.rating;
      // },

      'format': 'json',

    },

    orderBy: function(){
      if(this.sortField == "date" && this.orderField == "desc"){
        return "lastest";
      }else if(this.sortField == "date" && this.orderField == "asc"){
        return "oldest";
      }else{
        return this.sortField;
      }
    },

    search: function(options){
      this.orderField = "desc";
      this.sortField  = "date";

      if(options.sort == "oldest"){
        this.orderField = "asc";
      }
      else if(options.sort == "alphabet"){
        this.orderField = "asc";
        this.sortField  = "alphabet";
      }
      else{
        this.sortField = options.sort;
      }

      this.rating   = options.rating;
      this.quality  = options.quality;
      this.genre    = options.genre;

      if(options.hasOwnProperty("keywords")){
        if(options.keywords.length >= 1){
          this.server_api.keywords = options.keywords;
        }else{
          delete this.server_api.keywords;
        }
      }

      this.pager();
    },

    parse: function(response){
      this.totalRecords = parseInt(response.data.movie_count);
      this.totalPages = Math.floor(this.totalRecords / this.perPage);
      return response.data.movies;
    }
  });

});
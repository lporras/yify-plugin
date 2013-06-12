'use strict';

YifyPlugin.module('Btapp.Views', function (Views, App, Backbone, Marionette, $) {

  Views.ContentView = Marionette.ItemView.extend({

    SUPPORTED_VIDEO_EXTENSIONS: [
      'mp4', 'mkv'
    ],

    SUPORTED_SUBS_EXTENSIONS: [
      'srt', 'vtt'
    ],

    ui: {
      videoContainer: "#video-container"
    },

    template: function(serialized_model){
      serialized_model["LongDescription"] = serialized_model["LongDescription"].replace(/\\r\\n/g, "<br />")
      return Handlebars.templates.movie(serialized_model)
    },

    initialize: function(){
      _.bindAll(this, 'btappConnect', 'torrent', 'file')
      this.btappModel = new App.Btapp.Model({torrentUrl: this.model.get("TorrentUrl")});
      this.btapp = new Btapp;
      var hash = this.model.get('hash')
      var torrent_match = this.btappModel.isInfoHash(hash) ? hash.toUpperCase() : '*';
      this.queries = [
          ['btapp','showview'],
          ['btapp','torrent','all',torrent_match,'file','all','*','properties','all','size'],
          ['btapp','torrent','all',torrent_match,'file','all','*','properties','all','downloaded'],
          ['btapp','torrent','all',torrent_match,'file','all','*','properties','all','streaming_url'],
          ['btapp','torrent','all',torrent_match,'file','all','*','properties','all','name'],
          ['btapp','torrent','all',torrent_match,'properties','all'],
          ['btapp','torrent','all',torrent_match,'remove'],
          ['btapp','torrent','all',torrent_match,'open_containing']
      ];
      this.btappConnect();
      this.btapp.live('torrent ' + torrent_match + ' properties', this.torrent, this);
      this.videoViews = {};
    },

    btappConnect: function(){
      this.btapp.connect({
          product: this.btappModel.get('product'),
          plugin: this.btappModel.get('plugin'),
          pairing_type: this.btappModel.get('pairing_type'),
          queries: this.queries
      });
    },

    torrent: function(properties, torrent) {
        if(!properties || typeof properties !== 'object' || typeof properties.has === 'undefined') {
            return;
        }
        var hash = this.btappModel.get('hash');
        if( (this.btappModel.isInfoHash(hash) && torrent.id === hash.toUpperCase()) ||
            properties.get('download_url') === decodeURIComponent(hash) ||
            properties.get('uri') === decodeURIComponent(hash)
        ) {
          torrent.live('file * properties', this.file, this);
        }
    },

    file: function(properties) {
        var name = properties.get('name');
        var ext = name.substr(name.lastIndexOf('.') + 1).toLowerCase();
        var fileName = name.substr(0, name.lastIndexOf('.'));
        if(_.include(this.SUPPORTED_VIDEO_EXTENSIONS, ext)) {
            var videoPlayerView = new App.MovieStreaming.Views.VideoPlayerView({model: properties});
            this.ui.videoContainer.html(videoPlayerView.render().el);
            this.videoViews[fileName] = videoPlayerView;
        } else if(_.include(this.SUPORTED_SUBS_EXTENSIONS, ext)){
            if(this.videoViews[fileName] != undefined){
                this.videoViews[fileName].appendSubs(properties.get('streaming_url'), 'en');
            }
        }
    }

  });

  Views.MovieAppLayout = Marionette.Layout.extend({
    className: "movieApp",

    template: function(){
      return Handlebars.templates.movieAppLayout()
    },

    regions: {
      menu: "#menu",
      content: "#content"
    },

    initialize: function(options){
      _.bindAll(this, 'btappConnect', 'addCallback')
      this.btappModel = new App.Btapp.Model({torrentUrl: this.model.get("TorrentUrl")});
      this.btapp = new Btapp;
      this.btappConnect();
      this.btapp.on('add:add', this.addCallback);
    },

    btappConnect: function(){
      this.btapp.connect({
        product: this.btappModel.get('product'),
        plugin: this.btappModel.get('plugin'),
        pairing_type: this.btappModel.get('pairing_type'),
        queries: [['btapp','add'],['btapp','create']]
      });
    },

    addCallback: function(add){
      this.btapp.off('add:add', this.addCallback);
      add.torrent(this.btappModel.get('link'));
      this.btapp.disconnect();
    }
  });

});

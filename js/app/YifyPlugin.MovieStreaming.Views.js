'use strict';

YifyPlugin.module('MovieStreaming.Views', function (Views, App, Backbone, Marionette, $) {

  Views.VideoPlayerView = Marionette.ItemView.extend({

    initialize: function(){
      _.bindAll(this, 'appendSubs')
    },

    template: function(serialized_model){
      var name = serialized_model["name"];
      var ext = name.substr(name.lastIndexOf('.') + 1).toLowerCase();
      serialized_model["video_ext"] = ext
      return Handlebars.templates.videoPlayer(serialized_model)
    },

    ui: {
      video: "video"
    },

    onRender: function(){
    },

    appendSubs: function(src, srclang){
      this.ui.video.append('<track kind="subtitles" src="'+ src +'" srclang="'+ srclang +'" label="English Subtitles" default="" enabled=true />')
      this.ui.video.mediaelementplayer({
        // auto-select this language (instead of starting with "None")
        startLanguage:'en',
        // automatically translate into these languages
        translations:['es','ar','zh','ru'],
        // enable the dropdown list of languages
        translationSelector: true
      });
    }

  });

});
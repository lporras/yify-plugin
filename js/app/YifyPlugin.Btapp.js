YifyPlugin.module('Btapp', function(Btapp, App, Backbone, Marionette, $, _) {

  Btapp.Model = Backbone.Model.extend({
    initialize: function(options){
      if(options.torrentUrl){
        var hash = options.torrentUrl;
        var link = this.isInfoHash(hash) ? this.getMagnetLink(hash) : hash;
        this.set({link: link, hash: hash, product: 'Torque'});
      }
    },

    TRACKERS: [
      'udp://tracker.openbittorrent.com:80/announce',
      'udp://tracker.publicbt.com:80/announce',
      'http://bt.rghost.net/announce',
      'http://exodus.desync.com/announce',
      'http://tracker.ccc.de/announce',
      'http://tracker.publichd.eu/announce',
      'http://tracker.torrentbay.to:6969/announce',
      'http://tracker.yify-torrents.com/announce',
      'udp://ipv4.tracker.harry.lu:80/announce',
      'udp://tracker.ccc.de/announce',
      'udp://tracker.ccc.de:80/announce',
      'udp://tracker.djhsearch.co.cc:80/announce',
    ],

    isInfoHash: function (hash) {
      return typeof hash === 'string' && hash.length === 40;
    },

    isMagnetLink: function (hash) {
      return hash.indexOf('magnet:?') !== -1;
    },

    getMagnetLink: function (hash) {
      var link = 'magnet:?xt=urn:btih:' + hash;
      _.each(this.TRACKERS, function(tracker) {
          link += '&tr=' + tracker;
      });
      return link;
    }
  });
});
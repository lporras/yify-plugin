YifyPlugin.module('Btapp', function(Btapp, App, Backbone, Marionette, $, _) {

  Btapp.Model = Backbone.Model.extend({
    initialize: function(options){
      if(options.torrentUrl && options.hash){
        var hash = options.hash;
        var link = this.isInfoHash(hash) ? this.getMagnetLink(hash) : hash;
        this.set({link: link, hash: hash, product: 'Torque'});
      }
    },

    TRACKERS: [
      'udp://tracker.openbittorrent.com:80/announce',
      'udp://tracker.coppersurfer.tk:6969',
      'udp://glotorrents.pw:6969/announce',
      'udp://tracker.opentrackr.org:1337/announce',
      'udp://torrent.gresille.org:80/announce',
      'udp://p4p.arenabg.com:1337',
      'udp://tracker.leechers-paradise.org:6969'
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
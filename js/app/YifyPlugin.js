var YifyPlugin = new Backbone.Marionette.Application();

YifyPlugin.addRegions({
  header: '#header',
  main: '#main',
  footer: '#footer'
});

YifyPlugin.on('initialize:after', function() {
  Backbone.history.start();
});
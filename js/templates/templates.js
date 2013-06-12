(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movie'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 id=\"movie-title\"><a href=\"";
  if (stack1 = helpers.MovieUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.MovieTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h2>\n\n<img src=\"";
  if (stack1 = helpers.MediumScreenshot1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MediumScreenshot1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Screenshot1\" />\n<img src=\"";
  if (stack1 = helpers.MediumScreenshot2) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MediumScreenshot2; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Screenshot2\" />\n<img src=\"";
  if (stack1 = helpers.MediumScreenshot3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MediumScreenshot3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"Screenshot3\" />\n\n<div class=\"long-desc\">\n  ";
  if (stack1 = helpers.ShortDescription) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ShortDescription; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  <br/>\n  <br/>\n  ";
  if (stack1 = helpers.LongDescription) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.LongDescription; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n\n<div id=\"video-container\">\n</div>";
  return buffer;
  });
templates['movieAppLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<section>\n  <navigation id=\"menu\"></navigation>\n  <article id=\"content\"></article>\n</section>";
  });
templates['movieItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"browse-content\">\n  <div class=\"browse-img\">\n    <a href=\"";
  if (stack1 = helpers.MovieUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"";
  if (stack1 = helpers.CoverImage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.CoverImage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" /></a>\n  </div>\n  <div class=\"browse-info\">\n    <span class=\"info\">\n      <h3><a href=\"";
  if (stack1 = helpers.MovieUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.MovieTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n      <p><b>Size:</b> ";
  if (stack1 = helpers.size) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.size; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      <p><b>Quality:</b> ";
  if (stack1 = helpers.Quality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Quality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      <p><b>Genre:</b> ";
  if (stack1 = helpers.Genre) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Genre; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      <p><b>IMDB Rating:</b> ";
  if (stack1 = helpers.MovieRating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieRating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/10</p>\n      <span>\n        <p class=\"peers\"><b>Peers:</b> ";
  if (stack1 = helpers.TorrentPeers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.TorrentPeers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p class=\"peers\"><b>Seeds:</b> ";
  if (stack1 = helpers.TorrentSeeds) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.TorrentSeeds; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      </span>\n    </span>\n    <span class=\"links\">\n      <a href=\"";
  if (stack1 = helpers.MovieUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"std-btn-small mright\" target=\"_blank\"><span>View Info</span></a>\n      <a href=\"";
  if (stack1 = helpers.TorrentUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.TorrentUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" class=\"std-btn-small mleft torrentDwl\" data-movieid=\"";
  if (stack1 = helpers.MovieID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MovieID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span>Download</span>\n      </a>\n      <a href=\"javascript:;\" class=\"std-btn-small streamTorrent\">\n        <span>View Online</span>\n      </a>\n    </span>\n  </div>\n</div>\n<div class=\"divider\"></div>\n";
  return buffer;
  });
templates['movieList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"movie-list\" class=\"browse\"></div>";
  });
templates['videoPlayer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<video width=\"450\" height=\"450\" controls=\"controls\">\n  <source src=\"";
  if (stack1 = helpers.streaming_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.streaming_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"video/";
  if (stack1 = helpers.video_ext) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video_ext; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>Your browser leaves much to be desired.</p>\n</video>";
  return buffer;
  });
})();
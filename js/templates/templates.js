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
  


  return "<div id=\"movie-search\">\n  <form class=\"form-horizontal\">\n\n    <div class=\"control-group\">\n      <label class=\"checkbox inline\" for=\"keywords\">Movie Name:</label>\n      <input type=\"text\" name=\"Keywords\" id=\"keywords\" value=\"\" class=\"input-xxlarge\" maxlength=\"300\" tabindex=\"1\" autocomplete=\"off\" placeholder=\"Type Movie Name\">\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </div>\n\n    <div class=\"control-group\">\n      <label class=\"checkbox inline\">Quality:</label>\n      <select name=\"Quality\" id=\"form_Quality\" class=\"span1\">\n        <option value=\"All\" style=\"text-indent: 0px;\" selected=\"selected\">All</option>\n        <option value=\"1080p\" style=\"text-indent: 0px;\">1080p</option>\n        <option value=\"3D\" style=\"text-indent: 0px;\">3D</option>\n        <option value=\"480p\" style=\"text-indent: 0px;\">480p</option>\n        <option value=\"720p\" style=\"text-indent: 0px;\">720p</option>\n        <option value=\"DVD\" style=\"text-indent: 0px;\">DVD</option>\n        <option value=\"HDRip\" style=\"text-indent: 0px;\">HDRip</option>\n      </select>\n\n      <label class=\"checkbox inline\">Genre:</label>\n      <select name=\"Genre\" id=\"form_Genre\" class=\"span1\">\n        <option value=\"All\" style=\"text-indent: 0px;\" selected=\"selected\">All</option>\n        <option value=\"Action\" style=\"text-indent: 0px;\">Action</option>\n        <option value=\"Adventure\" style=\"text-indent: 0px;\">Adventure</option>\n        <option value=\"Animation\" style=\"text-indent: 0px;\">Animation</option>\n        <option value=\"Biography\" style=\"text-indent: 0px;\">Biography</option>\n        <option value=\"Comedy\" style=\"text-indent: 0px;\">Comedy</option>\n        <option value=\"Crime\" style=\"text-indent: 0px;\">Crime</option>\n        <option value=\"Documentary\" style=\"text-indent: 0px;\">Documentary</option>\n        <option value=\"Drama\" style=\"text-indent: 0px;\">Drama</option>\n        <option value=\"Family\" style=\"text-indent: 0px;\">Family</option>\n        <option value=\"Fantasy\" style=\"text-indent: 0px;\">Fantasy</option>\n        <option value=\"Film-Noir\" style=\"text-indent: 0px;\">Film-Noir</option>\n        <option value=\"History\" style=\"text-indent: 0px;\">History</option>\n        <option value=\"Horror\" style=\"text-indent: 0px;\">Horror</option>\n        <option value=\"Music\" style=\"text-indent: 0px;\">Music</option>\n        <option value=\"Musical\" style=\"text-indent: 0px;\">Musical</option>\n        <option value=\"Mystery\" style=\"text-indent: 0px;\">Mystery</option>\n        <option value=\"Romance\" style=\"text-indent: 0px;\">Romance</option>\n        <option value=\"Sci-Fi\" style=\"text-indent: 0px;\">Sci-Fi</option>\n        <option value=\"Short\" style=\"text-indent: 0px;\">Short</option>\n        <option value=\"Sport\" style=\"text-indent: 0px;\">Sport</option>\n        <option value=\"Thriller\" style=\"text-indent: 0px;\">Thriller</option>\n        <option value=\"War\" style=\"text-indent: 0px;\">War</option>\n        <option value=\"Western\" style=\"text-indent: 0px;\">Western</option>\n      </select>\n\n      <label class=\"checkbox inline\">Rating:</label>\n      <select name=\"Rating\" id=\"form_Rating\" class=\"span1\">\n        <option value=\"0\" style=\"text-indent: 0px;\" selected=\"selected\">All</option>\n        <option value=\"9.9\" style=\"text-indent: 0px;\">10</option>\n        <option value=\"9\" style=\"text-indent: 0px;\">9+</option>\n        <option value=\"8\" style=\"text-indent: 0px;\">8+</option>\n        <option value=\"7\" style=\"text-indent: 0px;\">7+</option>\n        <option value=\"6\" style=\"text-indent: 0px;\">6+</option>\n        <option value=\"5\" style=\"text-indent: 0px;\">5+</option>\n        <option value=\"4\" style=\"text-indent: 0px;\">4+</option>\n        <option value=\"3\" style=\"text-indent: 0px;\">3+</option>\n        <option value=\"2\" style=\"text-indent: 0px;\">2+</option>\n        <option value=\"1\" style=\"text-indent: 0px;\">1+</option>\n      </select>\n\n      <label class=\"checkbox inline\">Order By:</label>\n      <select style=\"margin-right:0;\" name=\"orderBy\" id=\"form_orderBy\" class=\"span1\">\n        <option value=\"latest\" style=\"text-indent: 0px;\" selected=\"selected\">Latest</option>\n        <option value=\"oldest\" style=\"text-indent: 0px;\">Oldest</option>\n        <option value=\"seeds\" style=\"text-indent: 0px;\">Seeds</option>\n        <option value=\"peers\" style=\"text-indent: 0px;\">Peers</option>\n        <option value=\"size\" style=\"text-indent: 0px;\">Size</option>\n        <option value=\"A-Z\" style=\"text-indent: 0px;\">A-Z</option>\n        <option value=\"rating\" style=\"text-indent: 0px;\">Rating</option>\n      </select>\n    </div>\n  </form>\n\n</div>\n<div id=\"movie-list\" class=\"browse\">\n</div>";
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
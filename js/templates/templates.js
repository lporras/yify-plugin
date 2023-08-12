(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movie'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\nQuality: ";
  stack1 = depth0.quality;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n<br />\npeerflix \"magnet:?xt=urn:btih:";
  stack1 = depth0.hash;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" --vlc\n<br />\n";
  return buffer;}

  buffer += "<h2 id=\"movie-title\"><a href=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></h2>\n\n<div class=\"long-desc\">\n  ";
  foundHelper = helpers.description_intro;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description_intro; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n  <br/>\n  <br/>\n  ";
  foundHelper = helpers.description_full;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description_full; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n</div>\n\n<div id=\"video-container\">\n</div>\n\n<div class=\"hero-unit\">\n";
  stack1 = depth0.torrents;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
templates['movieAppLayout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<section>\n  <navigation id=\"menu\"></navigation>\n  <article id=\"content\"></article>\n</section>";});
templates['movieItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"media\">\n  <a href=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\" class=\"pull-left\">\n    <img src=\"";
  foundHelper = helpers.small_cover_image;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.small_cover_image; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" alt=\"\" class=\"media-object\"/>\n  </a>\n  <div class=\"media-body\">\n    <span class=\"info\">\n      <h4 class=\"media-heading\"><a href=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></h4>\n      <p><b>Genre:</b> ";
  stack1 = depth0.genres;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n      <p><b>IMDB Rating:</b> ";
  foundHelper = helpers.rating;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/10</p>\n      <span>\n        <p class=\"peers\"><b>Peers:</b> ";
  stack1 = depth0.torrents;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.peers;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n        <p class=\"peers\"><b>Seeds:</b> ";
  stack1 = depth0.torrents;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.seeds;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</p>\n      </span>\n    </span>\n  </div>\n  <span class=\"links\">\n    <a href=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"btn\" target=\"_blank\">View Info</a>\n    <a href=\"";
  stack1 = depth0.torrents;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[0];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" target=\"_blank\" class=\"btn\" data-movieid=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n      Download\n    </a>\n    <a href=\"javascript:;\" class=\"btn btn-primary streamTorrent\">\n      View Online\n    </a>\n  </span>\n</div>\n";
  return buffer;});
templates['movieList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"movies-search\" class=\"span10\">\n  <form class=\"form-horizontal\" id=\"search-form\">\n\n    <div class=\"control-group\">\n      <label class=\"checkbox inline\" for=\"keywords\">Movie Name:</label>\n      <input type=\"text\" name=\"keywords\" id=\"keywords\" value=\"\" class=\"input-xxlarge\" maxlength=\"300\" tabindex=\"1\" autocomplete=\"off\" placeholder=\"Type Movie Name\">\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </div>\n\n    <div class=\"control-group\">\n      <label class=\"checkbox inline\">Quality:</label>\n      <select name=\"quality\" id=\"form_Quality\" class=\"span1\">\n        <option value=\"All\" style=\"text-indent: 0px;\" selected=\"selected\">All</option>\n        <option value=\"1080p\" style=\"text-indent: 0px;\">1080p</option>\n        <option value=\"3D\" style=\"text-indent: 0px;\">3D</option>\n        <option value=\"480p\" style=\"text-indent: 0px;\">480p</option>\n        <option value=\"720p\" style=\"text-indent: 0px;\">720p</option>\n        <option value=\"DVD\" style=\"text-indent: 0px;\">DVD</option>\n        <option value=\"HDRip\" style=\"text-indent: 0px;\">HDRip</option>\n      </select>\n\n      <label class=\"checkbox inline\">Genre:</label>\n      <select name=\"genre\" id=\"form_Genre\" class=\"span2\">\n        <option value=\"\" style=\"text-indent: 0px;\" selected=\"selected\">All</option>\n        <option value=\"Action\" style=\"text-indent: 0px;\">Action</option>\n        <option value=\"Adventure\" style=\"text-indent: 0px;\">Adventure</option>\n        <option value=\"Animation\" style=\"text-indent: 0px;\">Animation</option>\n        <option value=\"Biography\" style=\"text-indent: 0px;\">Biography</option>\n        <option value=\"Comedy\" style=\"text-indent: 0px;\">Comedy</option>\n        <option value=\"Crime\" style=\"text-indent: 0px;\">Crime</option>\n        <option value=\"Documentary\" style=\"text-indent: 0px;\">Documentary</option>\n        <option value=\"Drama\" style=\"text-indent: 0px;\">Drama</option>\n        <option value=\"Family\" style=\"text-indent: 0px;\">Family</option>\n        <option value=\"Fantasy\" style=\"text-indent: 0px;\">Fantasy</option>\n        <option value=\"Film-Noir\" style=\"text-indent: 0px;\">Film-Noir</option>\n        <option value=\"History\" style=\"text-indent: 0px;\">History</option>\n        <option value=\"Horror\" style=\"text-indent: 0px;\">Horror</option>\n        <option value=\"Music\" style=\"text-indent: 0px;\">Music</option>\n        <option value=\"Musical\" style=\"text-indent: 0px;\">Musical</option>\n        <option value=\"Mystery\" style=\"text-indent: 0px;\">Mystery</option>\n        <option value=\"Romance\" style=\"text-indent: 0px;\">Romance</option>\n        <option value=\"Sci-Fi\" style=\"text-indent: 0px;\">Sci-Fi</option>\n        <option value=\"Short\" style=\"text-indent: 0px;\">Short</option>\n        <option value=\"Sport\" style=\"text-indent: 0px;\">Sport</option>\n        <option value=\"Thriller\" style=\"text-indent: 0px;\">Thriller</option>\n        <option value=\"War\" style=\"text-indent: 0px;\">War</option>\n        <option value=\"Western\" style=\"text-indent: 0px;\">Western</option>\n      </select>\n\n      <label class=\"checkbox inline\">Order By:</label>\n      <select style=\"margin-right:0;\" name=\"sort\" id=\"form_orderBy\" class=\"span2\">\n        <option value=\"lastest\" style=\"text-indent: 0px;\" selected=\"selected\">Latest</option>\n        <option value=\"oldest\" style=\"text-indent: 0px;\" >Oldest</option>\n        <option value=\"downloaded\" style=\"text-indent: 0px;\">Downloaded</option>\n        <option value=\"seeds\" style=\"text-indent: 0px;\">Seeds</option>\n        <option value=\"peers\" style=\"text-indent: 0px;\">Peers</option>\n        <option value=\"size\" style=\"text-indent: 0px;\">Size</option>\n        <option value=\"alphabet\" style=\"text-indent: 0px;\">A-Z</option>\n        <option value=\"rating\" style=\"text-indent: 0px;\">Rating</option>\n      </select>\n    </div>\n  </form>\n\n  <p id=\"movies-count\" class=\"span10\">\n    <span class=\"count\"></span> Torrents Found\n  </p>\n\n  <div class=\"movies-pagination\"></div>\n</div>\n\n\n<div id=\"movie-list\" class=\"browse media-list span10\">\n</div>";});
templates['videoPlayer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<video width=\"450\" height=\"450\" controls=\"controls\">\n  <source src=\"";
  foundHelper = helpers.streaming_url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.streaming_url; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" type=\"video/";
  foundHelper = helpers.video_ext;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.video_ext; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n  <p>Your browser leaves much to be desired.</p>\n</video>";
  return buffer;});
})();
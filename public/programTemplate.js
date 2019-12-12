(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['program'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"workout\" data-movement=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":44}}}) : helper)))
    + "\" data-time=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":65}}}) : helper)))
    + "\">\r\n  <div class=\"workout-contents\">\r\n    <div class=\"workout-image\">\r\n      <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":23}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":39}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"workout-info\">\r\n     <p>Exersize: <span class=\"workout-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":46},"end":{"line":7,"column":55}}}) : helper)))
    + "</span></p>\r\n     <p>Duration (Minutes): <span class=\"workout-time\">"
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":63}}}) : helper)))
    + "</span></p>\r\n     <p>Movement: <span class=\"workout-type\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":53}}}) : helper)))
    + "</span></p>\r\n     <p>Sets and Reps: <span>"
    + alias4(((helper = (helper = helpers.sets || (depth0 != null ? depth0.sets : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sets","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":37}}}) : helper)))
    + "</span></p>\r\n     <div class =\"delete-btn\">\r\n       <form action=\"/deleteWorkout\" method=\"POST\">\r\n         <input type=\"hidden\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":59}}}) : helper)))
    + "\" />\r\n         <input type=\"hidden\" name=\"type\"  value=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":14,"column":50},"end":{"line":14,"column":58}}}) : helper)))
    + "\" />\r\n         <input type=\"hidden\" name=\"time\" value=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":57}}}) : helper)))
    + "\" />\r\n         <input type=\"hidden\" name=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":16,"column":48},"end":{"line":16,"column":55}}}) : helper)))
    + "\" />\r\n         <input type=\"hidden\" name=\"sets\" value=\""
    + alias4(((helper = (helper = helpers.sets || (depth0 != null ? depth0.sets : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sets","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":57}}}) : helper)))
    + "\" />\r\n         <button type=\"submit\" id=\"deleteBtn\">Remove</button>\r\n       </form>\r\n     </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();
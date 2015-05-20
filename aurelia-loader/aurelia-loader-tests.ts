/// <reference path="lib.d.ts" />
/// <reference path="aurelia-loader.d.ts" />

function testTemplateDependency {
  var dep = new TemplateDependency('./alex', 'alex');
  dep.src;
  dep.name;
}

/// <reference path="lib.d.ts" />
/// <reference path="aurelia-framework.d.ts" />

function testPlugins() {
  var aurelia = {};
  var plg = new Plugins(aurelia)
  plg.aurelia;
  plg.info;
  plg.processed

  var moduleId = 'x';
  var config = {};
  var plgs: Plugins;

  plgs = plg.plugin(moduleId, config);
}

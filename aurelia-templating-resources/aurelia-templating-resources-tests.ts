/// <reference path="lib.d.ts" />
/// <reference path="aurelia-templating-resources.d.ts" />

function testCompose {
  var c  = new Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue)
  var newValue = 1, oldValue = 2;
  var executionContext = {};
  c.element;
  c.container;
  c.compositionEngine;
  c.viewSlot;
  c.viewResources;
  c.taskQueue;
  c.executionContext;
  c.view;
  c.viewModel;
  c.model;
  c.currentInstruction;
  c.currentViewModel;
  c.bind(executionContext);
  c.modelChanged(newValue, oldValue);
  c.viewChanged(newValue, oldValue);
  c.viewModelChanged(newValue, oldValue);
}

function testGlobalBehavior {
  var element = {};
  var gb = new GlobalBehavior(element);
  gb.element;
  gb.handler;
  gb.aureliaCommand;
  gb.aureliaAttrName;
  GlobalBehavior.handlers;
  GlobalBehavior.createSettingsFromBehavior;
  GlobalBehavior.jQueryPlugins;
  gb.bind();
  gb.attached();
  gb.detached();
  gb.unbind();
}

var viewFactory, viewSlot;

function testIf {
  var iif = new If(viewFactory, viewSlot)
  iif.viewFactory;
  iif.viewSlot;
  iif.showing;
  iif.view;
  iif.valueChanged(3);
}

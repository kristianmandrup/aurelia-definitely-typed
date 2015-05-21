/// <reference path="lib.d.ts" />
/// <reference path="aurelia-templating-binding.d.ts" />

var resources = [];
var element = {};
var info = {};
var existingInstruction = {};
var attrName = 'x';

function testSyntaxInterpreter {
  var si = new SyntaxInterpreter(parser, observerLocator, eventManager);
  SyntaxInterpreter.inject();
  si.parser;
  si.observerLocator;
  si.eventManager;
  si.attributeMap;
  si.language;
  si.interpret(resources, element, info, existingInstruction);
  si.handleUnknownCommand(resources, element, info, existingInstruction);
  si.determineDefaultBindingMode(element, attrName);
  si.bind(resources, element, info, existingInstruction);
  si.trigger(resources, element, info);
  si.delegate(resources, element, info);
  si.call(resources, element, info, existingInstruction);
  si.options(resources, element, info, existingInstruction);
}

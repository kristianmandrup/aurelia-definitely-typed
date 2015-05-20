/// <reference path="lib.d.ts" />
/// <reference path="aurelia-dependency-injection.d.ts" />

function testTransientRegistration {
  var tReg = new TransientRegistration('x');
  tReg.key;
  tReg.register([], 'x', function() {});
}

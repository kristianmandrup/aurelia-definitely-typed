/// <reference path="lib.d.ts" />
/// <reference path="aurelia-http-client.d.ts" />

function testHeaders() {
  var hds = new Headers({x: 2});
  hds.headers;
  hds.add('x', 2);
  hds.get('x');
  hds.clear();
  hds.configureXHR({xhr: 1});
}

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

function testHttpResponseMessage {
  var requestMessage = 'x';
  var xhr = {};
  var responseType = 'http';
  var reviver = {};

  var rm = new HttpResponseMessage(requestMessage, xhr, responseType);
  var rmv = new HttpResponseMessage(requestMessage, xhr, responseType, reviver);

  rm.requestMessage;
  rm.statusCode;
  rm.response;
  rm.isSuccess;
  rm.statusText;
  rm.reviver;
  rm.mimeType;
  rm.responseType;
  rm.headers;
  rm.content;
}

function testMimeTypes {
  mimeTypes["text/html"]
  mimeTypes["text/javascript"];
  mimeTypes["application/javascript"];
  mimeTypes["text/json"];
  mimeTypes["application/json"];
  mimeTypes["application/rss+xml"];
  mimeTypes["application/atom+xml"];
  mimeTypes["application/xhtml+xml"];
  mimeTypes["text/markdown"];
  mimeTypes["text/xml"];
  mimeTypes["text/mathml"];
  mimeTypes["application/xml"];
  mimeTypes["text/yml"];
  mimeTypes["text/csv"];
  mimeTypes["text/css"];
  mimeTypes["text/less"];
  mimeTypes["text/stylus"];
  mimeTypes["text/scss"];
  mimeTypes["text/sass"];
  mimeTypes["text/plain"];
};


function testRequestMessageProcessor {
  var xhrType, transformers;
  var rmp = new RequestMessageProcessor(xhrType, transformers)
  rmp.XHRType;
  rmp.transformers;
  rmp.xhr;
  rmp.abort();

  var client, message = 'xyz';
  rmp.process(client, message);
}

function testJSONPRequestMessage {
  var jrm = new JSONPRequestMessage();
  jrm = new JSONPRequestMessage('aurelia.io');
  jrm = new JSONPRequestMessage('aurelia.io', 'hello');

  jrm.method;
  jrm.uri;
  jrm.content;
  jrm.headers;
  jrm.responseType;
  jrm.callbackParameterName;

  var rmp: RequestMessageProcessor

  rmp = createJSONPRequestMessageProcessor();
}


function testRequestBuilder {
  var rb = new RequestBuilder(client);
  rb.client;
  rb.transformers;
  rb.useJsonp;


  RequestBuilder.addHelper(name, fn);
  rb.send();
}

var message, transformers;
var uri = 'aurelia.io', content = 'xay';
var callbackParameterName;

function testHttpClient {
  var hc = HttpClient();
  hc.requestTransformers;
  hc.requestProcessorFactories;
  hc.pendingRequests;
  hc.isRequesting;
  hc = hc.configure(fn);
  var rb : RequestBuilder;
  rb = hc.createRequest(uri);

  hc.send(message, transformers);
  hc.delete(uri);
  hc.get(uri);
  hc.head(uri);
  hc.jsonp(uri, callbackParameterName?: string);
  hc.options(uri);
  hc.put(uri, content);
  hc.patch(uri, content);
  hc.post(uri, content);
}

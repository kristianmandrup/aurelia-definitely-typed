/// <reference path="lib.d.ts" />
/// <reference path="aurelia-logging.d.ts" />

var levels = {
    none: 2;
    error: 4;
    warn: 5;
    info: 6;
    debug: 7;
};

function testLogging {
  var ae = new AggregateError('x', {}, true);
  var l = getLogger('x');
  addAppender({});
  setLevel(3)

  var lg = new Logger('x', 'y');
  lg.id;
  lg.debug();
  lg.info();
  lg.warn();
  lg.error();
}

/// <reference path="lib.d.ts" />
/// <reference path="aurelia-binding.d.ts" />

function testAccessKeyedObserver {
  var akObs = new AccessKeyedObserver(); {  
  var info = akObs.objectInfo;
  // keyInfo: any;
  // evaluate: any;
  // observerLocator: any;
  // disposeKey: any;
  // disposeObject: any;
  // disposeProperty: any;
  // callback: any;
  // constructor(objectInfo: any, keyInfo: any, observerLocator: any, evaluate: any);
  // updatePropertySubscription(object: any, key: any): void;
  // objectOrKeyChanged(object: any, key?: any): void;
  // subscribe(callback: any): () => void;
  // notify(): void;
  // dispose(): void;
}

function testModifyCollectionObserver {

  var taskQueue = 1;
  var col = 2;
  var mcObs = new ModifyCollectionObserver(taskQueue, col);

  // taskQueue: any;
  // queued: any;
  // callbacks: any;
  // changeRecords: any;
  // oldCollection: any;
  // collection: any;
  // lengthPropertyName: any;
  // lengthObserver: any;
  // array: any;
  // constructor(taskQueue: any, collection: any);
  // subscribe(callback: any): () => void;
  // addChangeRecord(changeRecord: any): void;
  // reset(oldCollection: any): void;
  // getLengthObserver(): any;
  // call(): void;
}

function testCollectionLengthObserver {
  var clObs = new CollectionLengthObserver([]);

  // collection: any;
  // callbacks: any;
  // lengthPropertyName: any;
  // currentValue: any;
  // constructor(collection: any);
  // getValue(): any;
  // setValue(newValue: any): void;
  // subscribe(callback: any): () => void;
  // call(newValue: any): void;
}


function testPathObserver {
  var pathObs = new PathObserver(1,2,3);
  // leftObserver: any;
  // disposeLeft: any;
  // rightObserver: any;
  // disposeRight: any;
  // callback: any;
  // constructor(leftObserver: any, getRightObserver: any, value: any);
  // updateRight(observer: any): any;
  // subscribe(callback: any): () => void;
  // notify(newValue: any): void;
  // dispose(): void;
}

function testCompositeObserver {
  var compObs = new CompositeObserver([], 1);
  // subscriptions: any;
  // evaluate: any;
  // callback: any;
  // constructor(observers: any, evaluate: any);
  // subscribe(callback: any): () => void;
  // notify(newValue: any): void;
  // dispose(): void;
}

/// <reference path="lib.d.ts" />
/// <reference path="aurelia-animator-css.d.ts" />

function testCssAnimator() {
  var animator = new CssAnimator();

  animator.addMultipleEventListener(el, s, fn);
  animator.addAnimationToStack(animId);
  animator.removeAnimationFromStack(animId);  
  animator.getElementAnimationDelay(element);
  animator.move();
  animator.enter(element);
  animator.leave(element);
  animator.removeClass(element, className);
  animator.addClass(element, className);
} 

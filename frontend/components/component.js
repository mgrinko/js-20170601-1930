'use strict';

const CLASS_HIDDEN = 'js-hidden';

export default class Component {
  constructor(element) {
    this._el = element;
  }

  hide() {
    this._el.classList.add(CLASS_HIDDEN);
  }

  show() {
    this._el.classList.remove(CLASS_HIDDEN);
  }

  on(eventName, callback, selector = '') {
    this._el.addEventListener(eventName, (event) => {
      if (selector && !event.target.closest(selector)) {
        return;
      }

      callback(event);
    });
  }

  trigger(eventName, data = null) {
    let customEvent = new CustomEvent(eventName, { detail: data });

    this._el.dispatchEvent(customEvent);
  }

}
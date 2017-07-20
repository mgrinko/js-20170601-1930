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
}
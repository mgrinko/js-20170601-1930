'use strict';

import compiledTemplate from './template.hbs';

export default class PhoneViewer {

  constructor(options) {
    this._el = options.el;
  }

  render(phoneDetails) {
    this._el.innerHTML = compiledTemplate({
      phone: phoneDetails
    });
  }

  show() {
    this._el.classList.remove('js-hidden');
  }
}
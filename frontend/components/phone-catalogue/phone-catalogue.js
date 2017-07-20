'use strict';

import './styles.css';

export default class PhoneCatalogue {

  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;

    this._compiledTemplate = require('./template.hbs');

    this._render();
  }

  _render() {
    this._el.innerHTML = this._compiledTemplate({
      phones: this._phones
    });
  }
}

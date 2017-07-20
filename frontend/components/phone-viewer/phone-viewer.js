'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component {

  constructor(options) {
    super(options.el);

    this._el.addEventListener('click', this._onBackButtonClick.bind(this))
  }

  render(phoneDetails) {
    this._el.innerHTML = compiledTemplate({
      phone: phoneDetails
    });
  }

  _onBackButtonClick(event) {
    if (!event.target.closest('[data-element="back-button"]')) {
      return;
    }

    let customEvent = new CustomEvent('back', {
      bubbles: false,
    });

    this._el.dispatchEvent(customEvent);
  }
}
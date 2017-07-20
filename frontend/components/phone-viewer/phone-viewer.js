'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component {

  constructor(options) {
    super(options.el);

    this.on('click', this._onBackButtonClick.bind(this))
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

    this.trigger('back');
  }
}
'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component {

  constructor(options) {
    super(options.el);

    this.on('click', this._onBackButtonClick.bind(this));
    this.on('click', this._onAddButtonClick.bind(this));
  }

  render(phoneDetails) {
    this._phone = phoneDetails;

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

  _onAddButtonClick(event) {
    if (!event.target.closest('[data-element="add-button"]')) {
      return;
    }

    this.trigger('add', this._phone.id);
  }
}
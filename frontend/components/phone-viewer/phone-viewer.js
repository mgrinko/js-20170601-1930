'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component';

export default class PhoneViewer extends Component {

  constructor(options) {
    super(options.el);

    this.on('click', this._onBackButtonClick.bind(this), '[data-element="back-button"]');
    this.on('click', this._onAddButtonClick.bind(this), '[data-element="add-button"]');
  }

  render(phoneDetails) {
    this._phone = phoneDetails;

    this._el.innerHTML = compiledTemplate({
      phone: phoneDetails
    });
  }

  _onBackButtonClick(event) {
    this.trigger('back');
  }

  _onAddButtonClick(event) {
    this.trigger('add', this._phone.id);
  }
}
'use strict';

import './styles.css';
import compiledTemplate from './template.hbs';
import Component from '../component';


export default class PhoneCatalogue extends Component {

  constructor(options) {
    super(options.el);

    this._phones = options.phones;

    this._render();

    this.on('click', this._onPhoneClick.bind(this), '[data-element="phone"]');
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phones: this._phones
    });
  }

  _onPhoneClick(event) {
    let phoneElement = event.target.closest('[data-element="phone"]');

    this.trigger('phoneSelected', phoneElement.dataset.phoneId);
  }
}

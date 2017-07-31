'use strict';

import './styles.css';
import compiledTemplate from './template.hbs';
import Component from '../component';


export default class PhoneCatalogue extends Component {

  constructor(options) {
    super(options.el);

    this._phones = [];

    this._render();

    this.on('click', this._onPhoneClick.bind(this), '[data-element="phone"]');
  }

  setPhones(phones) {
    this._phones = phones;
    this._render();
  }

  getMouseoutPromise() {

    return new Promise((resolve) => {

      this.on('mouseout', (event) => {
        if (!event.target.matches('[data-element="phone"]')) {
          return;
        }

        if (event.target.contains(event.relatedTarget)) {
          return;
        }

        resolve();

      });

    });


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

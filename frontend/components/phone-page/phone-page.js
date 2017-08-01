'use strict';

import PhoneCatalogue from '../phone-catalogue/phone-catalogue';
import PhoneViewer from '../phone-viewer/phone-viewer';
import ShoppingCart from '../shopping-cart/shopping-cart';
import PhoneService from '../../services/phone.service';


export default class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phone-catalogue"]'),
    });

    this._viewer = new PhoneViewer({
      el: this._el.querySelector('[data-component="phone-viewer"]'),
    });

    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopping-cart"]'),
    });

    this._catalogue.on('phoneSelected', this._onPhoneSelected.bind(this));
    this._viewer.on('back', this._onPhoneViewerBack.bind(this));
    this._viewer.on('add', this._onPhoneViewerAdd.bind(this));

    PhoneService.getAll()
      .then(this._showPhones.bind(this));
  }


  _onPhoneViewerAdd(event) {
    this._shoppingCart.addProducts(event.detail);
  }

  _onPhoneSelected(event) {
    let phoneId = event.detail;

    let phoneDetailsPromise = PhoneService.get(phoneId);
    let mouseoutPromise = this._catalogue.getMouseoutPromise();

    // mouseoutPromise
    //   .then((mouseoutDetails) => phoneDetailsPromise)
    //   .then((phoneDetails) => {
    //     this._showPhoneDetails(phoneDetails);
    //   });


    Promise.all([phoneDetailsPromise, mouseoutPromise])
      .then(([phoneDetails]) => {
        this._showPhoneDetails(phoneDetails);
      });
  }

  _onPhoneViewerBack() {
    this._viewer.hide();
    this._catalogue.show();
  }


  _showPhones(phonesFromServer) {
    this._catalogue.setPhones(phonesFromServer);
  }

  _showPhoneDetails(phoneDetails) {
    this._viewer.setPhone(phoneDetails);

    this._catalogue.hide();
    this._viewer.show();
  }

}

'use strict';

class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;

    this._render();
  }

  _render() {
    this._el.innerHTML = `
      <ul class="phones">
        <li class="thumbnail">
          <a href="#!/phones/motorola-xoom-with-wi-fi" class="thumb">
            <img alt="Motorola XOOM™ with Wi-Fi" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </a>
          <a href="#!/phones/motorola-xoom-with-wi-fi">Motorola XOOM™ with Wi-Fi</a>
          <p>The Next, Next Generation

            Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).</p>
        </li>
      </ul>
    `;
  }
}
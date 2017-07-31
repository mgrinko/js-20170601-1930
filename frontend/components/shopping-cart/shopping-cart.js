import compiledTemplate from './template.hbs';
import Component from '../component';

export default class ShoppingCart extends Component {

  constructor(options) {
    super(options.el);

    this._products = [];

    this._render();
  }

  addProducts(product) {
    this._products.push(product);

    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      products: this._products
    });
  }
}

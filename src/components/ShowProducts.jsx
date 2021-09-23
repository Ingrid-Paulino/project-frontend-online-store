import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart } from '../services/AddToCart';

export default class ShowProducts extends Component {
  handleCart = (item) => {
    addToCart(item);
  }

  showProducts(API) {
    return (API.map((product) => (
      <>
        <p key={ product.id } data-testid="product">
          {' '}
          { product.title }
          {' '}
        </p>
        <img src={ product.thumbnail } alt={ `Foto de ${product.title}` } />
        <p>{ `Preço: R$${product.price}` }</p>
        <Link
          to={ { pathname: `/details/${product.id}`,
            state: product } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.handleCart(product) }
        >
          Add to Cart
        </button>
      </>
    )));
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        { this.showProducts(products) }
      </div>
    );
  }
}

ShowProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

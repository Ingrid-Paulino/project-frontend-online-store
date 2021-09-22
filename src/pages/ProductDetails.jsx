import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/AddToCart';

export default class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">
          { state.title }
        </p>
        <img src={ state.thumbnail } alt={ `Foto de ${state.title} ` } />
        <p>{ `Preço: ${state.price}` }</p>
        <section>
          <p>Especificações:</p>
          <p>{ `Condição: ${state.condition}` }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => addToCart(state) }
          >
            Adicionar ao carrinho
          </button>
          <Link
            to="/card"
            className="btn btn-primary"
            data-testid="shopping-cart-button"
          >
            Cart
          </Link>
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      condition: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

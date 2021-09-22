import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductReview from '../components/ProductReview';

export default class ProductDetails extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }

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
        </section>
        <form>
          <ProductReview />
          <button
            type="submit"
            onClick={ (e) => this.handleSubmit(e) }
          >
            Avaliar
          </button>
        </form>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

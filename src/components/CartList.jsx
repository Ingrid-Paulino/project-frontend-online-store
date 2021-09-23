import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartList extends Component {
  handleCartList(itens) {
    return itens.map(({ title, id, thumbnail, price, quantidade = 1 }) => (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ `Foto de ${id}` } />
        <p>{`Preço: R$${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          { quantidade }
        </p>
      </div>));
  }

  render() {
    const { itens } = this.props;
    return (
      <div>
        <h1> Carrinho: </h1>
        { this.handleCartList(itens) }
      </div>
    );
  }
}

CartList.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

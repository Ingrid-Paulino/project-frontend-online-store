import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}
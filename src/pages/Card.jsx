import React, { Component } from 'react';
import CartList from '../components/CartList';
import Loading from '../components/Loading';
import { getCartItens } from '../services/AddToCart';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      itens: [],
    };
  }

  componentDidMount() {
    const cartItens = getCartItens();
    this.addToState(cartItens);
  }

  addToState = (itens) => {
    this.setState({
      itens,
      load: false,
    });
  }

  cartList(itens) {
    return (
      <CartList itens={ itens } />
    );
  }

  emptyCart() {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </h2>
    );
  }

  render() {
    const { load, itens } = this.state;
    if (load) return <Loading />;
    return (
      <div>
        { !itens.length ? this.emptyCart() : this.cartList(itens) }
      </div>
    );
  }
}

import React, { Component } from 'react';
import Loading from '../Components/Loading';
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
    console.log(cartItens);
  }

  addToState = (itens) => {
    this.setState({
      itens,
      load: false,
    });
  }

  cartList(itens) {
    return (
      itens.map(({ title, id, thumbnail, price, quantidade = 1 }) => (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <img src={ thumbnail } alt={ `Foto de ${id}` } />
          <p>{`Preço: R$${price}`}</p>
          <p data-testid="shopping-cart-product-quantity">
            { quantidade }
          </p>
        </div>
      ))
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

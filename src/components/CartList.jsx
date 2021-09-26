import React, { Component } from 'react';
import CartItem from './CartItem';
import { readCartItens } from '../services/AddToCart';

export default class CartList extends Component {
  constructor() {
    super();

    this.state = {
      itens: [],
    };
  }

  componentDidMount() {
    this.getCartItens();
  }

  handleCartList(itens) {
    return itens.map((item) => <CartItem key={ item.id } item={ item } />);
  }

  getCartItens = () => {
    const itens = readCartItens();
    this.setState({
      itens,
    });
  }

  render() {
    const { itens } = this.state;
    return (
      <div>
        <h1> Carrinho: </h1>
        { this.handleCartList(itens) }
      </div>
    );
  }
}

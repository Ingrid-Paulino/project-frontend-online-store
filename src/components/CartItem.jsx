import React, { Component } from 'react';
import { addToCart, readCartItens, subFromCart } from '../services/AddToCart';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const {
      item: { quantidade = 1 }
    } = props;
    this.state = {
      quantidade,
    };
  }

  handleDecrease = () => {
    const { item } = this.props;
    subFromCart(item);
    this.updateState();
  }

  handleIncrease = () => {
    const { item } = this.props;
    addToCart(item);
    this.updateState();
  }

  updateState = () => {
    const { item } = this.props;
    const readCart = readCartItens();
    const cartItem = readCart.find((i) => i.id === item.id);
    this.setState({
      quantidade: cartItem.quantidade,
    });
  }

  render() {
    const { item: { id, thumbnail, title, price } } = this.props;
    const { quantidade } = this.state;
    return (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ `Foto de ${title}` } />
        <p>{`Preço: R$${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          { quantidade }
        </p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleDecrease }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleIncrease }
        >
          +
        </button>
      </div>
    );
  }
}

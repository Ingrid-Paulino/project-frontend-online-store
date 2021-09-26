import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addToCart, readCartItens, subFromCart } from '../services/AddToCart';
// Consulta: https://pt.stackoverflow.com/questions/78504/arredondando-um-n%C3%BAmero-decimal-para-um-n%C3%BAmero-decimal-mais-baixo

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const {
      item: { quantidade = 1 },
    } = props;
    this.state = {
      quantidade,
    };
  }

  handleDelete=() => {
    const { item } = this.props;
    console.log(item);
    this.updateState();
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
        <p>
          {`Preço: R$${Math.floor(parseFloat(price * quantidade) * 100) / 100}`}

        </p>
        <p data-testid="shopping-cart-product-quantity">
          { quantidade }
        </p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleDecrease }
          style={ { color: 'red' } }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleIncrease }
          style={ { color: 'green' } }
        >
          +
        </button>
        <button
          type="button"
          style={ { color: 'red', fontWeight: 'bold' } }
          onClick={ this.handleDelete }
        >
          DELETE
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    id: PropTypes.string,
    quantidade: PropTypes.number,
  }).isRequired,
};

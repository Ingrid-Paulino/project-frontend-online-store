import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/card"
          data-testid="shopping-cart-button"
        >
          <button
            type="submit"
          >
            Add
          </button>
        </Link>
      </div>

    );
  }
}

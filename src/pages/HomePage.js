import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from '../components/ListCategories';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      queryInput: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { queryInput } = this.state;
    const getAPI = await getProductsFromCategoryAndQuery('', queryInput);
    const { results } = getAPI;
    this.setState({
      products: results,
    });
  }

  showProducts(API) {
    return (API.map((product) => (
      <>
        <p key={ product.id } data-testid="product">
          {' '}
          { product.title }
          {' '}
        </p>
        <img src={ product.thumbnail } alt={ `Foto de ${product.title}` } />
        <p>{ `Preço: R$${product.price},00` }</p>
      </>
    )));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListCategories />
        <Link
          to="/card"
          data-testid="shopping-cart-button"
        >
          <button type="submit">Add to Cart</button>
        </Link>
        <input
          data-testid="query-input"
          name="queryInput"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Procurar
        </button>
        { products.length > 0 ? this.showProducts(products)
          : <p>Nenhum Produto Encontrado</p> }
      </div>
    );
  }
}

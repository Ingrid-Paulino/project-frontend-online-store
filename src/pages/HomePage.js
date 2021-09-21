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
      categoryId: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async ({ target: { value } }) => {
    const { queryInput, categoryId } = this.state;
    this.setState({
      categoryId: value,
    });
    const getAPI = await getProductsFromCategoryAndQuery(categoryId, queryInput);
    const { results } = getAPI;
    this.setState({
      products: results,
    });
  }

  showProducts(API) {
    return (API.map(({ id, title, thumbnail, price, condition }) => (
      <>
        <p key={ id } data-testid="product">
          {' '}
          { title }
          {' '}
        </p>
        <img src={ thumbnail } alt={ `Foto de ${title}` } />
        <p>{ `Preço: R$${price}` }</p>
        <Link
          to={ { pathname: `/details/${id}`,
            state: { id, title, thumbnail, price, condition } } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
      </>
    )));
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div>
        <ListCategories handleClick={ this.handleClick } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
          value=""
        >
          Procurar
        </button>
        { products.length > 0 ? this.showProducts(products)
          : <p>Nenhum Produto Encontrado</p> }
      </div>
    );
  }
}

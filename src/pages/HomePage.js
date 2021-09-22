import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from '../Components/ListCategories';
import { addToCart } from '../services/AddToCart';
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

  handleCart = (item) => {
    addToCart(item);
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
        <p>{ `Preço: R$${product.price}` }</p>
        <Link
          to={ { pathname: `/details/${product.id}`,
            state: { product } } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.handleCart(product) }
        >
          Add to Cart
        </button>
      </>
    )));
  }

  render() {
    const { products } = this.state;
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
          <button type="submit">Cart</button>
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

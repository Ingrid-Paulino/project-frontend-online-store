import React, { Component } from 'react';
import Loading from './Loading';
import { getCategories } from '../services/api';

export default class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getCategoriesAPI();
  }

  getCategoriesAPI = async () => {
    this.setState({ loading: true });
    const categoriesAPI = await getCategories();
    this.setState({ categories: categoriesAPI, loading: false });
    // console.log(categoriesAPI);
  };

  categoriesList = () => {
    const { categories } = this.state;
    console.log(categories);

    return (
      <section>
        {categories.map(({ id, name }) => (
          <p data-testid="category" key={ id }>
            {name}
          </p>
        ))}
      </section>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <section>
          <h2>Categorias:</h2>
          {loading ? <Loading /> : this.categoriesList()}
        </section>
      </div>
    );
  }
}

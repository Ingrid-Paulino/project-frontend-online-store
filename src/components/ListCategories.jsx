import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  };

  categoriesList = () => {
    const { categories } = this.state;
    const { handleClick } = this.props;

    return (
      <aside>
        {categories.map(({ id, name }) => (
          <label key={ id } htmlFor={ id }>
            <input
              data-testid="category"
              type="radio"
              onClick={ handleClick }
              name="category"
              value={ id }
            />
            {name}
          </label>
        ))}
      </aside>
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

ListCategories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

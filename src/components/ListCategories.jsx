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
    // console.log(categoriesAPI);
  };

  categoriesList = () => {
    const { categories } = this.state;
    const { handleClick } = this.props;
    return (
      <aside>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <input
              data-testid="category"
              id={ id }
              type="radio"
              name="opcao"
              value={ id }
              onClick={ handleClick }
            />
            {name}
          </div>
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

ListCategories.propTypes = { handleClick: PropTypes.func.isRequired };

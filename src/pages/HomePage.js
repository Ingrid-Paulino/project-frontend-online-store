import React, { Component } from 'react';
import ListCategories from '../components/ListCategories';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListCategories />

      </div>
    );
  }
}

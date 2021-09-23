import React, { Component } from 'react';

export default class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      mensagem: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { mensagem } = this.state;
    return (
      <div>
        <label htmlFor="rating">
          <input type="radio" name="rating" />
          1
          <input type="radio" name="rating" />
          2
          <input type="radio" name="rating" />
          3
          <input type="radio" name="rating" />
          4
          <input type="radio" name="rating" />
          5
        </label>
        <textarea
          name="mensagem"
          placeholder="Mensagem(opcional)"
          value={ mensagem }
          onChange={ this.handleChange }
          data-testid="product-detail-evaluation"
        />
      </div>
    );
  }
}

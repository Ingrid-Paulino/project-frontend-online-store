import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Card from './pages/Card';
import ProductDetails from './pages/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/card" component={ Card } />
            <Route path="/details/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import Cart from './components/Cart';
import { If } from 'react-if';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App(props) {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <SimpleCart />
          <If condition={state.products.length > 0}>
            <Products />
          </If>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

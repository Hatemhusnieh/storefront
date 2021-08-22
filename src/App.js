import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import { If } from 'react-if';
import { connect } from 'react-redux';

function App(props) {
  return (
    <>
      <Header />
      <Categories />
      <If condition={props.products.length > 0}>
        <Products />
      </If>
      <Footer />
    </>
  );
}

const stateToProps = (state) => {
  return state;
};
export default connect(stateToProps)(App);

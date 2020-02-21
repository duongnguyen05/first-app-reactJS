import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

import './App.css';

import shoppingCart from './redux/reducer';

const store = createStore(shoppingCart);

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shopping-cart" component={ShoppingCart} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

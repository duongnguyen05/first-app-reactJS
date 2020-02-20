import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

import './App.css';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopping-cart" component={ShoppingCart} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

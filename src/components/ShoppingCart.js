import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="_shopping-cart _content">
        <h1>Shopping Cart</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(ShoppingCart);
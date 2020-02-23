import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <div className="_shopping-cart _content">
        <div className="wrapper">
          { shoppingCart.length < 1 ?
            /* empty cart */
            (
              <div className="notify-empty">
                <img className="img-empty-cart" src={require('../images/shopping-cart/empty.png')} alt="empty cart" />
                <p className="message">You don't have any products in cart</p>
              </div>
            ) : (
              <div className="shopping-cart-info">
                <h1>You have product(s)</h1>
              </div>
            )
            /* shopping cart */
          }
        </div>
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
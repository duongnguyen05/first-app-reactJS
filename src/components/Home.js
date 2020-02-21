import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../redux/actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
  }

  handleAddToCart(product) {
    //- add product to cart
    this.props.addToCart(product);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="_home _content">
        {/* filter */}

        {/* list product */}
        <div className="product-grid">
          <div className="product-wrapper">
            {/* product items */}
            { products.map(product => {
              let discount = 100 - Math.round((Number(product.price_special)/Number(product.price))*100, 0);
              return (
                <div className="product-item" key={product.id}>
                  {/* image thumbnail */}
                  <img className="product-image" src={product.image} alt="product" />
                  {/* Name product */}
                  <p className="product-name">{ product.name }</p>
                  {/* price - price special */}
                  <div className="price-wrapper">
                    <p className="product-price special">{product.price_special},000 <span>đ</span></p>
                    <p className="product-price original">
                      {product.price},000 
                      <span>đ</span>
                      <span className="discount">- {discount}%</span>
                    </p>
                  </div>
                  <button className="btn-add-to-cart" onClick={() => this.handleAddToCart(product)}>
                    <i className="material-icons">add</i>
                    Add To Cart
                  </button>
                  {/* button add to cart */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.items 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) =>  { dispatch(addToCart(product)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
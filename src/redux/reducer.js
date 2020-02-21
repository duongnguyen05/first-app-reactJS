import initialState from './store';

function shoppingCart(state = initialState, action) {
  switch(action.type){
    case 'ADD_TO_CART': 
      let shoppingCart = state.shoppingCart, itemExist = null, { product } = action;
      console.log(shoppingCart)
      if(!product) break;
      itemExist = shoppingCart.find(i => {
        let _return = false
        if(i.id === product.id) {
          _return = true;
          i.qty += 1;
        }
        return _return;
      });

      if(!itemExist) {
        shoppingCart.push({
          ...product,
          qty: 1
        });
      }
      return {
        ...state,
        shoppingCart
      }
    default:
      return state
  } 
}

export default shoppingCart;
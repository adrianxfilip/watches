const addToCart = (id) => ({
  type : "ADD_TO_CART",
  payload : {id : id}
})

const removeFromCart = (id) => ({
  type : "REMOVE_FROM_CART",
  payload : {id : id}
})

const clearCart = () => ({
  type : "CLEAR_CART"
})

export {addToCart, clearCart, removeFromCart}
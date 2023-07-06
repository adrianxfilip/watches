const addToCart = (id, tickets, ppt, image, name, drawDate) => ({
  type : "ADD_TO_CART",
  payload : {id : id, tickets : tickets, ppt: ppt, image:image, name:name, drawDate : drawDate}
})

const removeFromCart = (id) => ({
  type : "REMOVE_FROM_CART",
  payload : {id : id}
})

const clearCart = () => ({
  type : "CLEAR_CART"
})

export {logIn, loadContestsData, addToCart, clearCart, removeFromCart, loadUserData}
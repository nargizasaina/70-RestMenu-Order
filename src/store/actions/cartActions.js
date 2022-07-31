export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_TOTAL_PRICE = 'ADD_TO_TOTAL_PRICE';

export const initCart = () => ({type: INIT_CART});
export const addToCart = (type) => ({type: ADD_TO_CART, payload: type});
export const addToTotalPrice = (price) => ({type: ADD_TO_TOTAL_PRICE, payload: price});
import axios from "axios";
import {BASE_URL} from "../../constants";

export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_PURCHASING_OPEN = 'SET_PURCHASING_OPEN';

export const initCart = () => ({type: INIT_CART});
export const addToCart = (data) => ({type: ADD_TO_CART, payload: {type: data.type, price: data.price}});
export const removeFromCart = (data) => ({type: REMOVE_FROM_CART, payload: {type: data.type, price: data.price}});
export const setPurchasingOpen = isOpen => ({type: SET_PURCHASING_OPEN, payload: isOpen});

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, payload: error});

export const postOrder =  data => {
    return async dispatch => {
        try{
            dispatch(orderRequest());

            await axios.post(BASE_URL + 'orders.json', data);
            dispatch(orderSuccess());

        } catch (error) {
             dispatch(orderFailure(error));
        }
    };
};

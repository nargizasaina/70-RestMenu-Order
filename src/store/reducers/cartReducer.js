import {ADD_TO_CART, ADD_TO_TOTAL_PRICE, INIT_CART} from "../actions/cartActions";
import {BASE_DELIVERY} from "../../constants";

const initialState = {
    orders: {
        Caviar: 0,
        Crab: 0,
        Tuna: 0,
        Oysters: 0,
        Shrimps: 0,
    },
    totalPrice: BASE_DELIVERY,

};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CART:
            return {...initialState};
        case ADD_TO_CART:
            return {
                ...state,
              orders: {
                    ...state.orders,
                  [action.payload]: state.orders[action.payload] + 1
              }
            };
        case ADD_TO_TOTAL_PRICE:
            return {
                ...state,
                cart: {...state.orders},
                totalPrice: state.totalPrice + action.payload
            };
        default:
            return {...state};
    }
};

export default cartReducer;
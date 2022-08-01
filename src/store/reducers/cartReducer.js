import {
    ADD_TO_CART,
    INIT_CART, ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS, REMOVE_FROM_CART,
    SET_PURCHASING_OPEN
} from "../actions/cartActions";
import {BASE_DELIVERY} from "../../constants";

const initialState = {
    orders: {},
    totalPrice: BASE_DELIVERY,
    purchasing: false,
    loading: false,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CART:
            return {...initialState};
        case ADD_TO_CART:
            if (state.orders[action.payload.type]) {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload.type]: state.orders[action.payload.type] + 1
                    },
                    totalPrice: state.totalPrice + action.payload.price
                };
            } else {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload.type]: 1
                    },
                    totalPrice: state.totalPrice + action.payload.price
                };
            }
        case REMOVE_FROM_CART:
            if (state.orders[action.payload.type] > 1) {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload.type]: state.orders[action.payload.type] - 1
                    },
                    totalPrice: state.totalPrice - action.payload.price
                };
            } else {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload.type]: 0
                    },
                    totalPrice: state.totalPrice - action.payload.price
                };
            }
        case SET_PURCHASING_OPEN:
            return {...state, purchasing: action.payload};
        case ORDER_REQUEST:
            return {...state, loading: true, error: null};
        case ORDER_SUCCESS:
            return {...state, loading: false, error: null};
        case ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return {...state};
    }
};

export default cartReducer;
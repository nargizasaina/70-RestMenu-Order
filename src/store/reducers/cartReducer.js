import {
    ADD_TO_CART,
    ADD_TO_TOTAL_PRICE,
    INIT_CART, ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS,
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
            if (state.orders[action.payload]) {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload]: state.orders[action.payload] + 1
                    }
                };
            } else {
                return {
                    ...state,
                    orders: {
                        ...state.orders,
                        [action.payload]: 1
                    }
                };
            }
        case ADD_TO_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            };
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
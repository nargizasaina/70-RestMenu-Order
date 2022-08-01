import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/dishesActions";

const initialState = {
    dishes: [],
    loading: false,
    error: null
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_DISHES_SUCCESS:
            return {...state, loading: false, error: null, dishes: action.payload};
        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return {...state};
    }
};

export default dishesReducer;

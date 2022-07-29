import axios from "axios";

export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const FETCH_DISHES_FAILURE = 'FETCH_DISHES_FAILURE';

export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
export const fetchDishesSuccess = menu => ({type: FETCH_DISHES_SUCCESS, payload: menu});
export const fetchDishesFailure = error => ({type: FETCH_DISHES_FAILURE, payload: error});

export const fetchDishes = () => {
    return async dispatch => {
        try {
            dispatch(fetchDishesRequest());
            const response = await axios('https://menu-ccd28-default-rtdb.europe-west1.firebasedatabase.app/dishes/');
            console.log(response);
            dispatch(fetchDishesSuccess());
        } catch (error) {
            dispatch(fetchDishesFailure(error));
        }
    };
};
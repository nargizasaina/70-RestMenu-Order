import axios from "axios";
import {BASE_URL} from "../../constants";

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
            const response = await axios(BASE_URL + 'dishes.json');
            const data = response.data;

            if (data) {
                const dishes = Object.keys(data).map(id => {
                    const dish = data[id];
                    return {...dish, id};
                });
                dispatch(fetchDishesSuccess(dishes));
            }
        } catch (error) {
            dispatch(fetchDishesFailure(error));
        }
    };
};
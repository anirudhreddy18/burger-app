import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchIngredientsStart());
        axios.get('https://react-burger-builder-52a19.firebaseio.com/Orders.json')
            .then((res) => {
                dispatch(fetchIngredientsSuccess(res.data));
            }).catch(err => {
                dispatch(fetchIngredientsFail());
            });
    }
}

const fetchIngredientsStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

const fetchIngredientsSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL
    }
}
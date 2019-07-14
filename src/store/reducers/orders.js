import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            {
                const allOrders = {...action.orders};
                return {
                    ...state,
                    orders: allOrders,
                    loading: false
                }
            }

        case actionTypes.FETCH_ORDERS_FAIL:
            {
                return {
                    ...state,
                    loading: false
                }
            }
        default:
            return state;
    }
}

export default reducer;
import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    let orderItemsList = [];
    for (const [key, value] of props.ingredients) {
        orderItemsList.push(<li key={key}> <span style={{ textTransform: 'capitalize' }}>{key}</span> : {value}</li>);
    }
    return <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {orderItemsList}
        </ul>
        <p><strong>Total Price : {props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
}

export default orderSummary;
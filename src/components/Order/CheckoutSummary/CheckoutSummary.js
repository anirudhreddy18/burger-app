import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{ width: '100%', margin: 'auto' }} >
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Success" clicked = {props.continueHandler}>CONTINUE</Button>
            <Button btnType="Danger" clicked = {props.cancelHandler}>CANCEL</Button>
        </div>
    );
}

export default checkoutSummary;
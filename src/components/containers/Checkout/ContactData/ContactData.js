import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';
import classes from './ContactData.css';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    OrderHandler = (event) =>
    {
        event.preventDefault();
        console.log(this.props.ingredients);
        console.log(this.props.price.toFixed(2));

        
        //Make AJAX Call to save orders
        console.log("AJAX CAll not done")
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" className={classes.Input} />
                    <input type="email" name="email" placeholder="Your Email" className={classes.Input} />
                    <input type="text" name="street" placeholder="Your Street" className={classes.Input} />
                    <input type="text" name="postal" placeholder="Postal code" className={classes.Input} />
                    <Button btnType="Success" clicked={this.OrderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price
    }
}


export default connect(mapStateToProps)(ContactData);
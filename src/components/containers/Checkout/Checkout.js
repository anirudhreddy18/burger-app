import React, { Component } from 'react';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {
    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        console.log(this.props);
        return <div>
            <CheckoutSummary
                ingredients={this.props.ingredients}
                continueHandler={this.continueHandler}
                cancelHandler={this.cancelHandler} />
            <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
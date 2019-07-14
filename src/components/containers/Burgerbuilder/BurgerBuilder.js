import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Burger from '../../../components/Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import axios from 'axios';
import * as actionCreators from '../../../store/actions/index';
import { connect } from 'react-redux';

class BurgerBuilder extends Component {

    state = { displayOrderNow: false }

    modalDisplayHandler = () => {
        this.setState({ displayOrderNow: true });
    }

    backDropHandler = () => {
        this.setState({ displayOrderNow: false });
    }

    purchaseContinueHandler = () => {
        console.log(this.props);
        this.props.history.push('/checkout');
    }

    render() {
        return <Aux>
            <Modal display={this.state.displayOrderNow} modalClosed={this.backDropHandler}>
                <OrderSummary ingredients={this.props.ingredients}
                    purchaseCancelled={this.backDropHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.props.price.toFixed(2)} />
            </Modal>
            <Burger ingredients={this.props.ingredients} />
            <BuildControls addHandler={this.props.addIngredientHandler}
                removeHandler={this.props.removeIngredientHandler}
                ingredients={this.props.ingredients}
                price={this.props.price.toFixed(2)}
                display={this.props.purchasable}
                orderNow={this.modalDisplayHandler} />
        </Aux>
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        purchasable: state.burgerBuilder.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredientHandler: (type) => dispatch(actionCreators.addIngredient(type)),
        removeIngredientHandler: (type) => dispatch(actionCreators.removeIngredient(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
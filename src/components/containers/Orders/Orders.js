import React, { Component } from 'react';
import Order from './Order/Order';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        let orders = [];
        if (!this.props.loading) {
            if (this.props.orders) {
                for (const [key, value] of Object.entries(this.props.orders)) {
                    orders.push(<Order ingredients={value} key={key} />);
                }
            }
        }
        else {
            orders.push(<p key="1">Loading....</p>);
        }
        return <div>
            {orders}
        </div>
    }
}
const mapStatetoProps = (state) => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Orders);
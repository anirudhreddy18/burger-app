import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const Controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const BuildControls = (props) => {
    console.log(props);
    let buttonDisplay = null;
    let buildControlArray = Controls.map(ctrl => {
        return <BuildControl key={ctrl.label} Label={ctrl.label}
            addHandler={props.addHandler.bind(this, ctrl.type)}
            removeHandler={props.removeHandler.bind(this, ctrl.type)} 
            disabled = {props.ingredients.get(ctrl.type) === 0}/>
    });

    if(props.display)
    {
        buttonDisplay = <button className={classes.OrderButton} onClick = {props.orderNow}>Order Now</button>
    }

    return <div className={classes.BuildControls}>
        <p>Current Price : {props.price}</p>
        {buildControlArray}
        {buttonDisplay}
    </div>
}

export default BuildControls;
import React, { PureComponent } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

class Burger extends PureComponent {
    render() {
        let transformedIngredients = [];
        if (this.props.ingredients) {
            for (const [key, value] of this.props.ingredients) {
                console.log(`${key}: ${value}`);
                for (let i = 1; i <= value; i++) {
                    transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);
                }
            }
        }
        if (transformedIngredients.length === 0) {
            transformedIngredients.push(<p key="1"> Please Start adding ingredients!</p>);
        }
        return <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>;
    }
}


export default Burger;
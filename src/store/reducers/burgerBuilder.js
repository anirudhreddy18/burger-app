import * as actionTypes from '../actions/actionTypes';

const getInitialIngredients = () => {
    let ingredients = new Map();
    ingredients.set("salad", 0);
    ingredients.set("bacon", 0);
    ingredients.set("cheese", 0);
    ingredients.set("meat", 0);
    return ingredients;
}

const initialState = {
    ingredients: getInitialIngredients(),
    price: 4,
    purchasable: false
}

const getCostOfIngredients = () => {
    let ingredientsCostMap = new Map();
    ingredientsCostMap.set("salad", 0.4);
    ingredientsCostMap.set("bacon", 0.5);
    ingredientsCostMap.set("cheese", 0.3);
    ingredientsCostMap.set("meat", 1.25);
    return ingredientsCostMap;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            {
                let ings = new Map(state.ingredients);
                let oldCount = ings.get(action.ingredientName);
                let newCount = oldCount + 1;
                ings.set(action.ingredientName, newCount);
                let purchasable = false
                for (const [, value] of ings) {
                    if (value > 0) {
                        purchasable = true
                    }
                }
                return {
                    ingredients: ings,
                    price: state.price + getCostOfIngredients().get(action.ingredientName),
                    purchasable: purchasable
                }
            }

        case actionTypes.REMOVE_INGREDIENT:
            {
                let ingredients = new Map(state.ingredients);
                let oldCount = ingredients.get(action.ingredientName);
                if (oldCount <= 0) {
                    return;
                }
                let newCount = oldCount - 1;
                ingredients.set(action.ingredientName, newCount);
                let purchasable = false
                for (const [, value] of ingredients) {
                    if (value > 0) {
                        purchasable = true
                    }
                }
                return {
                    ingredients: ingredients,
                    price: state.price - getCostOfIngredients().get(action.ingredientName),
                    purchasable: purchasable
                }
            }

        default: {
            return state;
        }
    }
}

export default reducer;
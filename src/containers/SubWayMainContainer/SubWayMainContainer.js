import React, { Component } from "react";
import ParentTag from "../../hoc/ParentTag";
import Subway from "../../component/Subway/Subway";
import BuildControls from "../../component/Subway/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Subway/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  cheese: 0.3,
  salad: 0.2,
  bacon: 0.6,
  meat: 0.9
};
class SubWayMainContainer extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalprice: 3,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    console.log(ingredients);

    const sum = Object.keys(ingredients)
      .map(ikey => {
        return ingredients[ikey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
    console.log(sum);
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredient
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalprice: newPrice, ingredient: updatedIngredients });
    //this.setState({ totalprice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredient
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalprice: newPrice, ingredient: updatedIngredients });

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  render() {
    const disabledingredient = { ...this.state.ingredient };

    for (let key in disabledingredient) {
      disabledingredient[key] = disabledingredient[key] <= 0;
    }

    return (
      <ParentTag>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredient} />
        </Modal>
        <Subway ingredients={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledingredient}
          price={this.state.totalprice}
          purchasable={!this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </ParentTag>
    );
  }
}

export default SubWayMainContainer;

import React, { Component } from "react";
import Classes from "./SubwayIngredient.css";
import PropTypes from "prop-types";

class SubwayIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={Classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={Classes.BreadTop}>
            <div className={Classes.Seeds1} />
            <div className={Classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={Classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={Classes.Cheese} />;
        break;
      case "salad":
        ingredient = <div className={Classes.Salad} />;
        break;
      case "bacon":
        ingredient = <div className={Classes.Bacon} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
SubwayIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default SubwayIngredient;

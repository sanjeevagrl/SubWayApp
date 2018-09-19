import React from "react";

import classes from "./Subway.css";
import SubwayIngredient from "./SubwayIngredient/SubwayIngredient";

const subway = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <SubwayIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Subway}>
      <SubwayIngredient type="bread-top" />
      {transformedIngredients}
      <SubwayIngredient type="bread-bottom" />
    </div>
  );
};

export default subway;

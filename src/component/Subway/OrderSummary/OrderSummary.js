import React from "react";
import ParentTag from "../../../hoc/ParentTag";

const orderSumary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ikey => {
    return (
      <li key={ikey}>
        <span style={{ textTransform: "capitalize" }}>{ikey}</span>:
        {props.ingredients[ikey]}
      </li>
    );
  });

  return (
    <ParentTag>
      <h3>Your Order</h3>
      <p>A delicous Subway with the following ingredient</p>
      <ul>{ingredientSummary}</ul>
      <p>Coutinue to Checkout?</p>
    </ParentTag>
  );
};

export default orderSumary;

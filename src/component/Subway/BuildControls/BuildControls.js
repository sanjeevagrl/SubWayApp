import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:
      <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctr => (
      <BuildControl
        key={ctr.label}
        lable={ctr.label}
        added={() => props.ingredientAdded(ctr.type)}
        remove={() => props.ingredientRemove(ctr.type)}
        disabled={props.disabled[ctr.type]}
      />
    ))}
    <button
      disabled={props.purchasable}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;

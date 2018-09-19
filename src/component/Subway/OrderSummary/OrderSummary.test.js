import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

import OrderSummary from "./OrderSummary";
configure({ adapter: new Adapter() });

describe("order Summary", () => {
  const props = {
    salad: 1,
    bacon: 0,
    cheese: 0,
    meat: 0
  };
  const orderSummary = shallow(<OrderSummary ingredients={props} />);

  it("Order Summary render correctly", () => {
    expect(orderSummary.find("h3").exists()).toBe(true);
    //expect(orderSummary.find("h3")).toEqual(1);
  });
});

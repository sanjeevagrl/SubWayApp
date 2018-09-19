import React from "react";
import ParentTag from "../../hoc/ParentTag";

const Layout = props => (
  <ParentTag>
    <div>toolbar,sidebar</div>
    <main>{props.children}</main>
  </ParentTag>
);

export default Layout;

import React, { Component } from "react";
import Layout from "./component/Layout/Layout";
import SubWayMainContainer from "./containers/SubWayMainContainer/SubWayMainContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SubWayMainContainer />
        </Layout>
      </div>
    );
  }
}

export default App;

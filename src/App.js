import React, { Component } from "react";

import "./css/App.css";
import FetchEmployees from "./Components/fetchEmployees";


class App extends Component {
  render() {
    return (
      <div>
        <FetchEmployees />
      </div>
    )
  }
}




export default App;

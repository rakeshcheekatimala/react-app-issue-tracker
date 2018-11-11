import React, { Component } from "react";
import { Issue, IssueList, IssueChart } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left-container">
          <IssueChart />
          <IssueList />
        </div>
        <div className="right-container">
          <Issue />
        </div>
      </div>
    );
  }
}

export default App;

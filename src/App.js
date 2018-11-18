import React, { Component } from "react";
import { Issue, IssueChart, IssueList } from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-container">
          <div className="chart-container">
            <IssueChart />
          </div>
          <div className="right-container">
            <Issue />
          </div>
        </div>
        <div>
          <IssueList />
        </div>
      </div>
    );
  }
}

export default App;

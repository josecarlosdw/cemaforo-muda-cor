import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Cemaforo from "/Cemaforo"
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    };
  }

  circleOne = e => {
    this.setState({
      bgColor1: "Red",
      bgColor2: "",
      bgColor3: ""
    });
  };

  circleTwo = e => {
    this.setState({
      bgColor2: "yellow",
      bgColor1: "",
      bgColor3: ""
    });
  };

  circleThree = e => {
    this.setState({
      bgColor3: "green",
      bgColor2: "",
      bgColor1: ""
    });
  };

  render() {
    return (
      <div className="App">
        <div className="retangulo">
          <div
            className="circleOne"
            style={{ backgroundColor: this.state.bgColor1 }}
            onClick={this.circleOne}
          />
          <div
            className="circleTwo"
            style={{ backgroundColor: this.state.bgColor2 }}
            onClick={this.circleTwo}
          />
          <div
            className="circleThree"
            style={{ backgroundColor: this.state.bgColor3 }}
            onClick={this.circleThree}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

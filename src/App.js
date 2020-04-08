// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg, touch } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    // Bind touch() to `this`
    this.touch = this.touch.bind(this);

    connect();
  }

  sendBasic() {
    console.log("hello");
    sendMsg("hello");
  }

  touch() {
    // take value from front end text here, will need to pass a value
    var encodeString = touch("backend?")
    .then(dataWrappedByPromise => dataWrappedByPromise.text())
    .then(promiseData => {
        // Access Promise Data Here, setting the state
        this.setState({data: promiseData})
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sendBasic}>Hit</button>
        <button onClick={this.touch}>Touch</button>
      
        <h2>It is {this.state.data}.</h2>
      </div>
    );
  }
}

export default App;
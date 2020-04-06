// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg, touch } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  sendBasic() {
    console.log("hello");
    sendMsg("hello");
  }

  touch() {
    console.log("touching!")
    var encodeString = touch("backend?")
    console.log(encodeString);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sendBasic}>Hit</button>
        <button onClick={this.touch}>Touch</button>
      </div>
    );
  }
}

export default App;
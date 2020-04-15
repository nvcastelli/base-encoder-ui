// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg, encodeapi } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "Enter value to be encoded here...",
    };

    // Bind touch() to `this`
    this.encodeui = this.encodeui.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    connect();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    encodeapi(this.state.value)
    .then(dataWrappedByPromise => dataWrappedByPromise.text())
    .then(promiseData => {
        // Access Promise Data Here, setting the state
        this.setState({data: promiseData})
        console.log("data is " + promiseData)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    event.preventDefault();
  }

  sendBasic() {
    console.log("hello");
    sendMsg("hello");
  }

  // may deprecate this function and do in the handleSubmit(), TODO - what's best way to do it?
  encodeui(encodeText) {
    // take value from front end text here, will need to pass a value
    console.log("in outer touch")
    encodeapi(encodeText)
    .then(dataWrappedByPromise => dataWrappedByPromise.text())
    .then(promiseData => {
        // Access Promise Data Here, setting the state
        this.setState({data: promiseData})
        console.log("data is " + promiseData)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }

  //<button onClick={this.touch}>Touch</button>
        
  //b<h2>It is {this.state.data}.</h2>

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <label>
          Textbox to place string to be encoded:
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>It is {this.state.data}.</h2>
      </div>
    );
  }
}

export default App;
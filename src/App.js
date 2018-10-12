import React, { Component } from "react";
// import logo from "./logo.svg";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 3 }, { id: 3, value: 0 }]
  };

  constructor(props) {
    super(props);
    console.log("App -- constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App -- mounted");
  }

  render() {
    console.log("App -- rendered");

    return (
      <div>
        <NavBar
          count={this.state.counters.reduce(
            (acc, counter) => counter.value + acc,
            0
          )}
        />
        <Counters
          counters={this.state.counters}
          onAdd={this.handleAdd.bind(this)}
          onDelete={this.handleDelete.bind(this)}
          onIncrement={this.handleIncrement.bind(this)}
          onDecrement={this.handleDecrement.bind(this)}
          onReset={this.handleReset.bind(this)}
        />
      </div>
    );
  }

  handleAdd() {
    this.setState({
      ...this.state,
      counters: [
        ...this.state.counters,
        {
          id: this.state.counters.length + 1,
          value: 0
        }
      ]
    });
  }

  handleDelete(counter) {
    this.setState({
      ...this.state,
      counters: this.state.counters.filter(c => c !== counter)
    });
  }

  handleReset() {
    this.setState({
      ...this.state,
      counters: this.state.counters.map(counter => ({ ...counter, value: 0 }))
    });
  }

  handleIncrement(counter) {
    this.setState({
      ...this.state,
      counters: this.state.counters.map(
        c => (c === counter ? { ...counter, value: counter.value + 1 } : c)
      )
    });
  }

  handleDecrement(counter) {
    this.setState({
      ...this.state,
      counters: this.state.counters.map(
        c => (c === counter ? { ...counter, value: counter.value - 1 } : c)
      )
    });
  }
}

export default App;

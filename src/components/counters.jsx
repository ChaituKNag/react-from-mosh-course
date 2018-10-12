import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onAdd,
      onDelete,
      onReset,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    console.log("Counters -- rendered");
    return (
      <div>
        <button onClick={() => onAdd()} className="btn btn-sm btn-primary m-2">
          Add
        </button>
        <button onClick={() => onReset()} className="btn btn-link btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

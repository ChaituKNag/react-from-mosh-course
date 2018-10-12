import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  render() {
    console.log("Counter -- rendered");
    return (
      <div>
        <span className="counter-badge">
          <i className={this.getBadgeClasses()}>{this.formatCount()}</i>
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.disableButtonOnCountZero()}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          Delete
        </button>
      </div>
    );
  }

  disableButtonOnCountZero() {
    return this.props.counter.value === 0;
  }

  renderTags() {
    return (
      <ul>
        {this.props.counter.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  renderNoTags() {
    return <p>There are no tags!</p>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

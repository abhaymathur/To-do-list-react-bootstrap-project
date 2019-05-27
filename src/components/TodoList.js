import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        to do list
        <TodoItem />
      </div>
    );
  }
}

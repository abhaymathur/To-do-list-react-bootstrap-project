import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    const { items, deleteitem, handleedit, clearlist } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">To Do List</h3>

        {items.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            deleteitem={() => deleteitem(item.id)}
            handleedit={() => handleedit(item.id)}
          />
        ))}

        <button
          type="button"
          className="btn btn-block btn-primary mt-3 text-uppercase"
          onClick={clearlist}
        >
          Clear List
        </button>
      </ul>
    );
  }
}

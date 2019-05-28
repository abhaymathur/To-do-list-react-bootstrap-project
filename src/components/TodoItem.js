import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, deleteitem, handleedit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div>
          <span className="mx-2 text-sucess">
            <i className="fas fa-pen" onClick={handleedit} />
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash" onClick={deleteitem} />
          </span>
        </div>
      </li>
    );
  }
}

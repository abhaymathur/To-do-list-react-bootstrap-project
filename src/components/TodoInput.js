import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, edititem, handlechange, handlesubmit } = this.props;
    //console.log(edititem);

    return (
      <div className="card cards-body my-3">
        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>

            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              onChange={handlechange}
              value={item}
            />
          </div>
          <button
            className={
              edititem
                ? "btn btn-block btn-success mt-3 text-uppercase"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
            type="submit"
            disabled={item ? false : true}
          >
            {edititem ? "Edit Item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}

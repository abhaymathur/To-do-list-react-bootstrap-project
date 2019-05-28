import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

export default class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuid(),
    edititem: false
  };

  handlechange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handlesubmit = e => {
    e.preventDefault();
    const newitem = { id: this.state.id, title: this.state.item };
    //const updateditems = ;
    this.setState({
      items: [...this.state.items, newitem],
      item: "",
      id: uuid(),
      edititem: false
    });
  };
  clearlist = () => {
    this.setState({
      items: []
    });
  };
  deleteitem = id => {
    const updatedlist = this.state.items.filter(myitem => myitem.id !== id);
    this.setState({
      items: updatedlist
    });
  };
  handleedit = id => {
    const updatedlist = this.state.items.filter(myitem => myitem.id !== id);
    const tobeediteditem = this.state.items.find(myitem => myitem.id === id);

    this.setState({
      items: updatedlist,
      item: tobeediteditem.title,
      id: id,
      edititem: true
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center"> todo input</h3>
            <TodoInput
              item={this.state.item}
              edititem={this.state.edititem}
              handlechange={this.handlechange}
              handlesubmit={this.handlesubmit}
            />
            <TodoList
              items={this.state.items}
              deleteitem={this.deleteitem}
              handleedit={this.handleedit}
              clearlist={this.clearlist}
            />
          </div>
        </div>
      </div>
    );
  }
}

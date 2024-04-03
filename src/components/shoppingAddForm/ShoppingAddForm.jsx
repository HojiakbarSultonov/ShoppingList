// function ShoppingAddForm() {
//   return <div className="form">
//     <input type="text" className="title" placeholder="Title..."/>
//     <input type="number" className="number" placeholder="14"/>
//     <button>add</button>
//   </div>;
// }

// export default ShoppingAddForm;

import React, { Component } from "react";

export default class ShoppingAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Buy ",
      number: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAdd = () => {
    const data = {
      title: this.state.title,
      number: this.state.number,
    };
  };
  render() {
    const { title, number } = this.state;
    return (
      <div className="form">
        <input
          type="text"
          className="title"
          placeholder="Title..."
          onChange={this.onChangeTitle}
          name="title"
          value={title}
        />
        <input
          type="number"
          className="number"
          placeholder="14"
          name="number"
          value={number}
        />
        <button>add</button>
      </div>
    );
  }
}

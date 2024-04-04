import {
  Filter,
  Information,
  Search,
  ShoppingAddForm,
  ShoppingList,
} from "./components";

// function App() {
//   const data = [
//     { size: 14, title: "Buy Bananas", id: 1, active: false },
//     { size: 10, title: "Buy Ananas", id: 2, active: true },
//     { size: 8, title: "Buy Milk", id: 3, active: false },
//   ];

//   return (
//     <div className="app">
//       <div className="wrapper">
//         <div className="card">
//           <Information />
//           <ShoppingAddForm />
//           <ShoppingList data={data} />
//           <Filter />
//         </div>
//         <img src="/earth.svg" alt="" />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { arr } from "./data";
import { nanoid } from "nanoid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: arr,
      search: '',
      filter: 'all',
    };
  }

  onDelete = (id) => {

    const newArr = this.state.data.filter((c) => c.id !== id);
    this.setState({
      data: newArr,
    });
  };

  onToggleActive = (id) => {
    const newArr = this.state.data.map(item => {
      if (item.id === id) {
        return {
          ...item, active: !item.active
        }
      }
      return item
    })
    this.setState({
      data: newArr
    })
  }

  onAdd = (item) => {
    const { title, number } = item
    this.setState(state => ({ maxId: state.maxId++ }))
    const newData = { title, size: number, active: false, id: nanoid() }
    const newArr = [...this.state.data, newData]
    this.setState({
      data: newArr
    })
  }

  onSearch = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(c => c.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  onUpdateSearch = (search) => {
    this.setState({ search })
  }

  filterData = (arr, filter) => {
    switch (filter) {
      case 'completed':
        return arr.filter(item => item.active)
      case 'big-size':
        return arr.filter(item => item.size > 10)
      default:
        return arr

    }

  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }


  render() {
    const { data, search, filter } = this.state;
    const allData = this.filterData(this.onSearch(data, search), filter)
    return (
      <div className="app">
        <div className="wrapper">
          <div className="card">
            <Information length={data.length} />
            <Search onUpdateSearch={this.onUpdateSearch} />
            <ShoppingAddForm onAdd={this.onAdd} />
            <ShoppingList data={allData} onDelete={this.onDelete} onToggleActive={this.onToggleActive} />
            <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          <img src="/earth.svg" alt="" />
        </div>
      </div>
    );
  }
}

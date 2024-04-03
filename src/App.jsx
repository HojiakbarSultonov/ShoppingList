import {
  Filter,
  Information,
  ShoppingAddForm,
  ShoppingList,
} from "./components";

function App() {
  const data = [
    { size: 14, title: "Buy Bananas", id: 1, active: false },
    { size: 10, title: "Buy Ananas", id: 2, active: true },
    { size: 8, title: "Buy Milk", id: 3, active: false },
  ];

  return (
    <div className="app">
      <div className="wrapper">
        <div className="card">
          <Information />
          <ShoppingAddForm />
          <ShoppingList data={data} />
          <Filter />
        </div>
        <img src="/earth.svg" alt="" />
      </div>
    </div>
  );
}

export default App;

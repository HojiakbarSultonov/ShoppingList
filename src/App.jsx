import {
  Filter,
  Information,
  ShoppingAddForm,
  ShoppingList,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="card">
          <Information />
          <ShoppingAddForm />
          <ShoppingList />
          <Filter />
        </div>
        <img src="/earth.svg" alt="" />
      </div>
    </div>
  );
}

export default App;

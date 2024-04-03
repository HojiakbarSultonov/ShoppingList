import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ data }) {
  return (
    <div className="shopping__list">
      {data.map((item) => (
        <ShoppingListItem item={item} key={item.id} />
      ))}


    </div>
  );
}

export default ShoppingList;

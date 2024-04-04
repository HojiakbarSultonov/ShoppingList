import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ data, onDelete, onToggleActive }) {
  return (
    <div className="shopping__list">
      {data.length ? data.map((item) => (
        <ShoppingListItem
          item={item}
          key={item.id}
          onDeleteItem={() => onDelete(item.id)}
          onToggleActive={() => onToggleActive(item.id)}
        />
      )) : (
        <div>
          <h1 style={{ textAlign: 'center', color: 'white' }}>No Data</h1>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;

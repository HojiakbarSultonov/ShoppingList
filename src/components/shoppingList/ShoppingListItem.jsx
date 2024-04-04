


const ShoppingListItem = (props) => {
  const { item, onDeleteItem, onToggleActive } = props;
  return (
    <div className={`list__item ${item.active && "active"}`}>
      <div className="item__info">
        <span>{item.size}</span>
        <p>{item.title}</p>
      </div>
      <div className="item__actions">
        <span className="check" onClick={onToggleActive}>
          &#10003;
        </span>
        <span className="times" onClick={onDeleteItem}>
          &times;
        </span>
      </div>
    </div>
  );

}

export default ShoppingListItem;

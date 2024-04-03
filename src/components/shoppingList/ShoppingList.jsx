function ShoppingList() {
  return (
    <div className="shopping__list">
      <div className="list__item">
        <div className="item__info">
          <span>14</span>
          <p>Buy Bananas</p>
        </div>
        <div className="item__actions">
          <span className="check">&#10003;</span>
          <span className="times">&times;</span>
        </div>
      </div>

      <div className="list__item active">
        <div className="item__info">
          <span>14</span>
          <p>Buy Bananas</p>
        </div>
        <div className="item__actions">
          <span className="check">&#10003;</span>
          <span className="times">&times;</span>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;

const CartDropdownItem = ({ cartItem }) => {
  const { name, quantity, currency, price, images } = cartItem;

  return (
    <li className="cart-item">
      <div className="thumbnail-container">
        <img className="thumbnail" src={images.img1} alt={`${name}`} />
      </div>

      <div className="text-group">
        <div className="left">
          <h3 className="name">{name}</h3>
          <p className="price">
            <span className="currency">{currency.usd}</span>
            {price.usd}
          </p>
        </div>

        <div className="right">
          <p className="quantity">{quantity}</p>
        </div>
      </div>
    </li>
  );
};

export default CartDropdownItem;

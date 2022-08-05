import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, currency, price, images } = product;

  return (
    <article className="product-card">
      <div className="thumbnail-container">
        <img className="thumbnail" src={images.img1} alt={`${name}`} />
      </div>
      <div className="text-group">
        <h3 className="name">{name}</h3>
        <p className="price">
          <span className="currency">{currency.usd}</span>
          {price.usd}
        </p>
      </div>
      <Button buttonType="filled" buttonSize="md">
        Add to cart
      </Button>
    </article>
  );
};

export default ProductCard;

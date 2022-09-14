import ProductCard from "../product-card/product-card.component";

const ProductAll = ({ title, products }) => {
  return (
    <section>
      <h2>{title}</h2>

      <div className="products">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductAll;

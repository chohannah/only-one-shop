import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <section>
      <h2>{title}</h2>

      <div className="shop">
        {" "}
        {/* temp */}
        {products
          .filter((_, index) => index < 3)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default CategoryPreview;

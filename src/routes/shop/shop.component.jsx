import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <section className="shop">
      <h1 className="visually-hidden">Shop page</h1>
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Shop;

import CategoryCard from "./components/category-card/category-card.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Clothing",
      image:
        "https://cdn.shopify.com/s/files/1/0567/9690/5677/files/D32A0921_1080x.jpg?v=1633391513",
    },
    {
      id: 2,
      title: "Accessories",
      image:
        "https://cdn.shopify.com/s/files/1/0567/9690/5677/files/D32A0977_2_1_1080x.png?v=1633392297",
    },
  ];

  return (
    <main className="categories-group">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </main>
  );
};

export default App;

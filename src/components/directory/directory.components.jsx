import CategoryCard from "../category-card/category-card.component";

const Directory = ({ categories }) => {
  return (
    <main className="directory-group">
      <h1 className="visually-hidden">Categories</h1>

      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </main>
  );
};

export default Directory;

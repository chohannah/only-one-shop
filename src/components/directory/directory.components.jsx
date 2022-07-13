import CategoryCard from "../category-card/category-card.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <main className="directory-group">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </main>
  );
};

export default Directory;

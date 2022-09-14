import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

const CategoryCard = ({ category }) => {
  const { image, title } = category;
  const navigate = useNavigate();
  const titleInUrl = title.toLowerCase();

  const handleNavigateToCategory = () => {
    navigate(`/${titleInUrl}`);
  };

  return (
    <article className="category-card">
      <h1 className="visually-hidden">Category Card</h1>

      <div
        className="category-image-wrapper"
        onClick={handleNavigateToCategory}
      >
        <img src={image} alt={`click to open ${title} page`} />
      </div>

      <div className="category-contents">
        <p className="title">{title}</p>

        <Button buttonType="outlined" onClick={handleNavigateToCategory}>
          shop now
        </Button>
      </div>
    </article>
  );
};

export default CategoryCard;

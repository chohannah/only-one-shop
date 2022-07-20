import { Link } from "react-router-dom";

import Button from "../button/button.component";

const CategoryCard = ({ category }) => {
  const { image, title } = category;
  const titleInUrl = title.toLowerCase();

  return (
    <article className="category-card">
      <h1 className="visually-hidden">Category Card</h1>

      <div className="category-image-wrapper">
        <a className="category-iamge" href="/">
          <img src={image} alt={`click to open ${title} page`} />
        </a>
      </div>

      <div className="category-contents">
        <p className="title">{title}</p>
        <Link className="cta" to={`/${titleInUrl}`}>
          <Button buttonType="outlined">shop now</Button>
        </Link>
      </div>
    </article>
  );
};

export default CategoryCard;

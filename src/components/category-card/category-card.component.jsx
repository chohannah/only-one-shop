const CategoryCard = ({ category }) => {
  const { image, title } = category;

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
        <button className="cta">shop now</button>
      </div>
    </article>
  );
};

export default CategoryCard;

import { useNavigate } from 'react-router-dom'

import { DirectoryCategory } from '../directory/directory.components'

import { Button } from '../button'

type CategoryCardProps = {
  category: DirectoryCategory
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, title } = category
  const navigate = useNavigate()
  const titleInUrl = title.toLowerCase()

  const handleNavigateToCategory = () => {
    navigate(`/shop/${titleInUrl}`)
  }

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

        <Button variant="filled" onClick={handleNavigateToCategory}>
          shop now
        </Button>
      </div>
    </article>
  )
}

export default CategoryCard

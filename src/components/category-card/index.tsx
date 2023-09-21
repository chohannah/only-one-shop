import { Link } from 'react-router-dom'

import { DirectoryCategory } from '../directory'

import { StyledCategoryCard, StyledCategoryCardImageButton } from './styles'
import { Button } from '../button'

type CategoryCardProps = {
  category: DirectoryCategory
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, navMenu, buttonText } = category

  return (
    <StyledCategoryCard>
      <h1 className="visually-hidden">Category Card</h1>

      <StyledCategoryCardImageButton as={Link} to={`${navMenu}`}>
        <img src={image} alt={`click to open ${navMenu} page`} />
      </StyledCategoryCardImageButton>

      <Button
        variant="underlined"
        to={`${navMenu}`}
        className="category-card-button"
      >
        {buttonText}
      </Button>
    </StyledCategoryCard>
  )
}

import { Link } from 'react-router-dom'

import { useResponsive } from '../../hooks/useResponsive'
import { DirectoryCategory } from '../directory'

import { StyledCategoryCard, StyledCategoryCardImageButton } from './styles'
import { Button } from '../button'

type CategoryCardProps = {
  category: DirectoryCategory
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, navMenu, buttonText } = category
  const { isTablet, isDesktop } = useResponsive()

  return (
    <StyledCategoryCard isTablet={isTablet} isDesktop={isDesktop}>
      <h1 className="visually-hidden">Category Card</h1>

      <StyledCategoryCardImageButton
        as={Link}
        to={`${navMenu}`}
        isTablet={isTablet}
        isDesktop={isDesktop}
      >
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

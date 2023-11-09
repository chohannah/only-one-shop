import { CategoryItem } from '../../store/categories/category.types'

import { ProductCard } from '../product-card'

import { Column } from '../grid'

type CategoryPreviewTypes = {
  title: string
  products: CategoryItem[]
}

export const CategoryPreview: React.FC<CategoryPreviewTypes> = ({
  title,
  products,
}) => {
  return (
    <>
      {products
        .filter((_, index) => index < 4)
        .map((product) => (
          <Column sm={2} md={3} key={product.id}>
            <ProductCard product={product} />
          </Column>
        ))}
    </>
  )
}

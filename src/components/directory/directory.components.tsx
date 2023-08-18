import { Key } from 'react'

import CategoryCard from '../category-card/category-card.component'

export type DirectoryCategory = {
  id: Key
  title: string
  image: string
}

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Clothing',
    image:
      'https://cdn.shopify.com/s/files/1/0567/9690/5677/files/D32A0921_1080x.jpg?v=1633391513',
  },
  {
    id: 2,
    title: 'Accessories',
    image:
      'https://cdn.shopify.com/s/files/1/0567/9690/5677/files/D32A0977_2_1_1080x.png?v=1633392297',
  },
]

const Directory = () => {
  return (
    <main className="directory-group">
      <h1 className="visually-hidden">Categories</h1>

      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </main>
  )
}

export default Directory

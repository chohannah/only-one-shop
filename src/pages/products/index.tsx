import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCategoriesStart } from '../../store/categories/category.action'

import { Collections, ProductSourcing } from '../../components'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

import { ProductsHeader } from './products-header'

export const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <div className="products">
      <ProductsHeader />

      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>

      <ProductSourcing />
      <Collections />
    </div>
  )
}

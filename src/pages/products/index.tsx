import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import { fetchCategoriesStart } from '../../store/categories/category.action'

import {
  CategoriesPreview,
  Collections,
  ProductSourcing,
} from '../../components'

import Category from '../category'

import { StyledProducts } from './styles'
import { ProductDetails } from '../product-details'

export const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <StyledProducts className={clsx('products')}>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
        <Route path=":category/:productPath" element={<ProductDetails />} />
      </Routes>

      <ProductSourcing />

      <Collections />
    </StyledProducts>
  )
}

import Balancer from 'react-wrap-balancer'
import { Link } from 'react-router-dom'

import { LogoCircle } from '../../assets/logos'

import {
  StyledProductsHeader,
  StyledProductsHeaderCategory,
  StyledProductsHeaderTitle,
  StyledProductsLogo,
} from './styles'
import clsx from 'clsx'

export const ProductsHeader = () => {
  return (
    <StyledProductsHeader className={clsx('products-header')}>
      <StyledProductsHeaderCategory>
        <Link to="/products">Products</Link>
      </StyledProductsHeaderCategory>

      <StyledProductsHeaderTitle>
        <Balancer>
          We collect beautiful vintage design artifacts
          <br /> from the 20th & 21st century.
        </Balancer>
      </StyledProductsHeaderTitle>

      <StyledProductsLogo>
        <LogoCircle />
      </StyledProductsLogo>
    </StyledProductsHeader>
  )
}

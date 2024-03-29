import { Key } from 'react'
import { Balancer } from 'react-wrap-balancer'

import { CategoryCard } from '../category-card'

import { Container, Row, Column } from '../grid'
import { StyledDirectory, StyledDirectoryTitle } from './styles'
import clsx from 'clsx'

export type DirectoryCategory = {
  id: Key
  navMenu: string
  image: string
  buttonText: string
}

const categories: DirectoryCategory[] = [
  {
    id: 1,
    navMenu: 'products',
    image: `${process.env.PUBLIC_URL}/images/category-card/category-card-1.jpg`,
    buttonText: 'All products',
  },
  {
    id: 2,
    navMenu: 'collections',
    image: `${process.env.PUBLIC_URL}/images/category-card/category-card-2.jpg`,
    buttonText: 'Collections',
  },
]

export const Directory = () => {
  return (
    <StyledDirectory className={clsx('directory')}>
      <Container>
        <Row justifyContent="center">
          <Column sm={4} md={10} lg={8}>
            <StyledDirectoryTitle>
              <Balancer>
                Our mission is to collect unique & timeless design artefacts.
                From heritage to contemporary.
              </Balancer>
            </StyledDirectoryTitle>
          </Column>
        </Row>

        <Row justifyContent="center">
          {categories.map((category) => (
            <Column sm={2} md={6} lg={4} key={category.id}>
              <CategoryCard category={category} />
            </Column>
          ))}
        </Row>
      </Container>
    </StyledDirectory>
  )
}

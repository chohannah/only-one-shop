import { Outlet } from 'react-router-dom'

import {
  Directory,
  Collections,
  FeaturedMagazine,
  ProductsList,
} from '../../components'
import { HomeCarousel } from './home-carousel'
import { Instagram } from './instagram'

export const Home = () => {
  return (
    <main className="home">
      <HomeCarousel />
      <Directory />
      <ProductsList />
      <Collections />
      <FeaturedMagazine />
      <Instagram />
      <Outlet />
    </main>
  )
}

import { Outlet } from 'react-router-dom'

import { Directory, Collections, FeaturedMagazine } from '../../components'
import { HomeCarousel } from './home-carousel'
import { Instagram } from './instagram'

export const Home = () => {
  return (
    <main className="home">
      <HomeCarousel />
      <Directory />
      <Collections />
      <FeaturedMagazine />
      <Instagram />
      <Outlet />
    </main>
  )
}

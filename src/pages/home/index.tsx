import { Outlet } from 'react-router-dom'

import {
  Directory,
  Collections,
  FeaturedMagazine,
  Instagram,
} from '../../components'

export const Home = () => {
  return (
    <main className="home">
      <Directory />
      <Collections />
      <FeaturedMagazine />
      <Instagram />
      <Outlet />
    </main>
  )
}

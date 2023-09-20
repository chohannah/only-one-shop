import { Outlet } from 'react-router-dom'

import { Directory, Collections, FeaturedMagazine } from '../../components'

export const Home = () => {
  return (
    <main className="home">
      <Directory />
      <Collections />
      <FeaturedMagazine />
      <Outlet />
    </main>
  )
}

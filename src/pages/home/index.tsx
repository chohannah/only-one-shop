import { Outlet } from 'react-router-dom'

import { Directory, Collections } from '../../components'

export const Home = () => {
  return (
    <main className="home">
      <Directory />
      <Collections />
      <Outlet />
    </main>
  )
}

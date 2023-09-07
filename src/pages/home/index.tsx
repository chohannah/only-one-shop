import { Outlet } from 'react-router-dom'

import Directory from '../../components/directory'

export const Home = () => {
  return (
    <main className="home">
      <Directory />
      <Outlet />
    </main>
  )
}

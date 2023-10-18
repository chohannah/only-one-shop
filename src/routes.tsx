import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user.action'

import { Home, Products, Cart, Shipping } from './pages'
import { Gnb, GnbHome, GlobalFooter, Newsletter } from './components'
import LogIn from './pages/log-in'
import SignUp from './pages/sign-up'

import NotFound from './pages/not-found'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="app">
      {location.pathname === '/' ? <GnbHome /> : <Gnb />}

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="log-in" element={<LogIn />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="products/*" element={<Products />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="shipping" element={<Shipping />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Newsletter />
      <GlobalFooter />
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user.action'

import { Home, Products, Cart, Shipping, Payment, LogIn, SignUp } from './pages'
import { Gnb, GnbHome, GlobalFooter, Newsletter } from './components'

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
          <Route index element={<Home />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="products/*" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/payment" element={<Payment />} />
          <Route path="shipping" element={<Shipping />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Newsletter />
      <GlobalFooter />
    </div>
  )
}

export default App

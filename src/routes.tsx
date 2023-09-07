import { useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user.action'

import Home from './pages/home'
import LogIn from './pages/log-in/log-in.component'
import { Gnb } from './components'
import SignUp from './pages/sign-up/sign-up.component'

import Shop from './pages/shop/shop.component'
import Cart from './pages/cart/cart.component'
import { GlobalFooter } from './components'
import { Newsletter } from './components/newsletter'
import NotFound from './pages/not-found'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="app">
      <Gnb />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="log-in" element={<LogIn />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Newsletter />
      <GlobalFooter />
    </div>
  )
}

export default App

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentUser } from "./store/user/user.action";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import GNB from "./routes/gnb/gnb.component";
import SignUp from "./routes/sign-up/sign-up.component";
import LogIn from "./routes/log-in/log-in.component";
import Shop from "./routes/shop/shop.component";
import Cart from "./routes/cart/cart.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<GNB />}>
        <Route index element={<Home />}></Route>
        <Route path="log-in" element={<LogIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

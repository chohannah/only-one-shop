import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import GNB from "./routes/gnb/gnb.component";
import SignUp from "./routes/sign-up/sign-up.component";
import LogIn from "./routes/log-in/log-in.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GNB />}>
        <Route index element={<Home />}></Route>
        <Route path="log-in" element={<LogIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

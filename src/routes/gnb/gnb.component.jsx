import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import GnbCartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as OpensLogo } from "../../assets/logo.svg";
// import { ReactComponent as UserIcon } from "../../assets/icon-user.svg";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";
import { ReactComponent as LogInIcon } from "../../assets/icon-login.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icon-logout.svg";

const GNB = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const signOutUser = dispatch(signOutStart());

  return (
    <Fragment>
      <header className="gnb">
        <h1 className="gnb-left">
          <Link className="logo-wrapper" to="/">
            <OpensLogo className="logo" />
          </Link>
        </h1>

        <nav className="gnb-nav sm-hidden">
          <h2 className="visually-hidden">menu</h2>

          <ul className="nav-list">
            <Link className="nav-list-item" to="/shop">
              All
            </Link>
            <Link className="nav-list-item" to="/shop/clothing">
              Clothing
            </Link>
            <Link className="nav-list-item" to="/shop/accessories">
              Accessories
            </Link>
          </ul>
        </nav>

        <div className="gnb-right">
          {currentUser ? (
            <div className="logout" onClick={signOutUser}>
              <LogOutIcon className="icon-logout" />
              sign out
            </div>
          ) : (
            <Link className="login" to="/log-in">
              <LogInIcon className="icon-login" />
              log in
            </Link>
          )}

          <Link className="cart sm-only" to="/cart">
            <CartIcon className="icon-cart" />
            <span className="cart-count">{cartCount}</span>
          </Link>
          <GnbCartDropdown />

          <Link className="menu sm-only" to="/menu">
            <MenuIcon className="icon-menu" />
          </Link>
        </div>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default GNB;

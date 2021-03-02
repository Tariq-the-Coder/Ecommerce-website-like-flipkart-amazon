import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom'
import { signout } from '../actions/userActions';
import Aside from './Aside';
import SearchBox from './SearchBox'


export default function Navbar(props) {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };



  return (
    <>
      <header id='navbar' className="row">
        <div>
          <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)}>
            <i className="fa fa-bars"></i>
          </button>
          <Link className="brand" to="/">Dreamshop</Link>
        </div>
        <div id='search' className='order-1 order-sm-2 '>
          <Route render={({ history }) => (
            <SearchBox history={history}></SearchBox>)}
          ></Route>
        </div>
        <div className='order-2 order-sm-1'>
          <Link to="/cart"> Cart{cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>)}
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
              <Link to="/signin">Sign In</Link>
            )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <Link to="/admin">
                Admin <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/productlist">Products</Link>
                </li>
                <li>
                  <Link to="/orderlist">Orders</Link>
                </li>
                <li>
                  <Link to="/userlist">Users</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <Aside sidebar={sidebarIsOpen} setSidebar={setSidebarIsOpen} />
    </>
  )
}



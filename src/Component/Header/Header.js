import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../Component/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useFirebase from './../Authentification/Authenticate';
import useAuth from './../Home/Context/UseAuth';


const Header = () => {
  const buttonStyle={ fontWeight: "bold", color: "red" ,textDecoration:"none", textSize:'1.3rem'};
// activeStyle={}
const {user,googleSignOut}=useAuth();
// console.log(user.displayName);
// console.log(user.email)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    

    <div className="collapse navbar-collapse d-flex me-1" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink  className="nav-link2" to="/home"  >Home </NavLink>
        </li>
      {user.email &&  <div className="d-flex flex-column flex-lg-row">
        <li className="nav-item">
        <NavLink  className="nav-link2"  to="/myorders" >My Orders </NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link2" to="/allorders" > Manage Orders</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link2" to="/admin" > Add a service </NavLink>
        </li>
      </div>  }
        { user.displayName && <span className="nav-link2"> User:{user.displayName}</span> }
      { !user.displayName ?  <li className="nav-item">
        <NavLink className="nav-link2 text-dark"  to="/login" >  Login</NavLink>
        </li> :
        <li className="nav-item">
        <button className="nav-link2 text-dark"  onClick={googleSignOut}> Logout </button>
        </li>}
        
          </ul>
    </div>
  </div>


</nav>

        </div>
    );
};

export default Header;
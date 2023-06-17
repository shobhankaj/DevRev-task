import SearchBox from "../searchBox/SearchBox";
import "./header.css";
import {Link} from "react-router-dom";
import {useContext } from 'react'
import { Context } from '../../contex/Context';




const Header = () => {
  const user = useContext(Context);
  console.log(user);
  const Logged=()=>{
    return (
      <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking</span>
          <div className="navItems">
            <div className="headerButton1">{user}</div>
            {/* <Link to="/login_As_Admin" className="headerButton1">Login As Admin</Link> */}
            <Link to="/login_As_User" className="headerButton1">log Out</Link>
          </div>
        </div>
        
  
      </div>
    );
  }

  const Unlogged=()=>{
    return (
      <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking</span>
          <div className="navItems">
            <Link to="/register"  className="headerButton1">Register</Link>
            <Link to="/login_As_Admin" className="headerButton1">Login As Admin</Link>
            <Link to="/login_As_User" className="headerButton1">Login As User</Link>
          </div>
        </div>
        
  
      </div>
    );
  }
  return (
    <>
      {user ? <Logged/>: <Unlogged/> }
    </>
    
  );
};

export default Header;

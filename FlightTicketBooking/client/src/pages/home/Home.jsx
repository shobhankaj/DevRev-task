import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useLocation } from "react-router-dom";
import {useState,createContext, useContext } from 'react'
import { Context } from '../../contex/Context';



const Home = () => {
  const location = useLocation();
  const [username, setUsername]=useState(location.state.username);

  return (
    <Context.Provider value={username}>
    <div>
      {/* <Navbar username /> */}
      <Navbar user={username}/>
      <div className="homeContainer">
        {/* <Featured/>
        
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
    </Context.Provider>
  );
};

export default Home;

import "./navbar.css"
import SearchBox from "../searchBox/SearchBox"
import Header from "../header/Header"

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <Header/>
      <div className="searchbarContainer">
          <SearchBox user={props.user}/>
      </div>
      
    </div>
    
  )
}

export default Navbar
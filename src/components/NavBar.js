import {Link} from 'react-router-dom';
import logo from '../Images/lovers.png'

const NavBar = () => {
return(
  
    <navbar class="navbar_main">
      <figure>
        <img class="navbar_visual navbar_items" src={logo} alt="Logo" /> 
      </figure>
      <Link class="navbar_options navbar_items" to="/"> MAIN </Link>
      <Link class="navbar_options navbar_items" to="/ProductsPage"> PROJECTS </Link>
      <Link class="navbar_options navbar_items" to="/ContactPage"> RESUME  </Link>
      <Link class="navbar_options navbar_items" to="/ContactPage2"> CONTACT  </Link>
</navbar>
);
}

export default NavBar;
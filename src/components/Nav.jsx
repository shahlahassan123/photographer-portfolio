import * as React from 'react';
import { ImInstagram, ImFacebook2, ImLinkedin } from "react-icons/im";
import { Link } from 'react-router-dom';
import { ImMenu } from "react-icons/im";
import NavLinks from './NavLinks'


const Nav = () => {

  const [ isMenuClicked, setIsMenuClicked ] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='nav'>
      <div className='menu'>
        <ImMenu size={60} className="menu-icon"  onClick={()=>setIsMenuClicked(!isMenuClicked)} />
      </div>

{windowWidth >=1550 ? (
        <NavLinks  />
      ) : (
        isMenuClicked && <NavLinks  />
      )}
      
    </div>    
  )
}

export default Nav

import * as React from 'react';
import { ImInstagram, ImFacebook2, ImLinkedin } from "react-icons/im";
import { Link } from 'react-router-dom';
const NavLinks = () => {



    return (


        (<div className="leftNav">
            <ul className='listItems'>
                <Link className="link" to="/"><li className='item'>Portfolio</li></Link>
                <Link className="link" to="/about-me"><li className='item'>About Me</li></Link>
                <Link className="link" to="/contact-me"><li className='item'>Contact Me</li></Link>
            </ul>
            <div className='socialMediaIcons'>
                <Link className="link" to="https://www.instagram.com/rahilbassim/?hl=en"><ImInstagram className="icons" /></Link>
                <Link className="link" to="https://www.facebook.com/rahilbassim"><ImFacebook2 className="icons" /></Link>
                <Link className="link" to="https://www.linkedin.com/in/rahilbassim/"><ImLinkedin className="icons" /></Link>
            </div>

        </div>)



    )
}

export default NavLinks

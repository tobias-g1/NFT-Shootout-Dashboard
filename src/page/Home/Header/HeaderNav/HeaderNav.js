import React from 'react'
import logoHeader from '../../../../assets/images/logoHeader.png'
import Social from '../HeaderSocial/Social'
import { Link } from "react-scroll";


function HeaderNav() {
  
  const toggleNav =(e)=> {
    const getNavbtn = document.getElementById('nav-btn')
    getNavbtn.parentElement.classList.contains('is-active') ? getNavbtn.parentElement.classList.remove('is-active') : getNavbtn.parentElement.classList.add('is-active')
  }

  return (
    <div className='container flex flex-wrap'>
        <div className='headerLogo'>
            <a href='/'>
                <img src={logoHeader} alt="logo"/>
            </a>
        </div>
        <div className='nav-btn only-mobile' id="nav-btn" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className='headerNav'>
            <ul>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                {/* <a href='#home' title="Home" rel="noreferrer">Home</a> */}
              </li>
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>

                {/* <a href="#about" title="About" rel="noreferrer">About</a> */}
              </li>
              <li>
                <Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-70} duration={500}>Roadmap</Link>
                {/* <a href="#roadmap" title="Roadmap" rel="noreferrer">Roadmap</a> */}
              </li>
              <li>
                <Link activeClass="active" to="marketplace" spy={true} smooth={true} offset={-70} duration={500}>Marketplace</Link>
                {/* <a href="#marketplace" title="Marketplace" rel="noreferrer">Marketplace</a> */}
              </li>
              <li>
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</Link>
                {/* <a href="#team" title="Team" rel="noreferrer">Team</a> */}
              </li>
              <li>
                <a href="https://nftshootout.com/blog" target="_blank" title="Blog" rel="noreferrer">Blog</a>
              </li>
              <li><a href="https://nftshootout.com/img/NFTshootout-Whitepaper-Final-V1.pdf" target="_blank" title="Whitepaper" rel="noreferrer">Whitepaper</a></li>
            </ul>
            <div className='only-mobile'>
              <Social />
            </div>
        </nav>
    </div>
  )
}
export default HeaderNav
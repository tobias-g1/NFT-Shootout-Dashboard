import HeaderLang from './HeaderLang/HeaderLang';
import Social from './HeaderSocial/Social'
import './header.scss'
import HeaderNav from './HeaderNav/HeaderNav';
import { useEffect } from 'react';

function Header() {
    useEffect(()=>{
        window.addEventListener('scroll', function(event) {
            const getEle = document.getElementById('headerNav')
            window.scrollY >= 120 ? getEle?.classList.add('is-fixed') : getEle?.classList.remove('is-fixed')
        }, false);
    },[])
 

    return (
        <header id="home">
            <div className='header-social_container'>
                <div className='flex container flex-wrap'>
                    <span className='only-desktop'>
                        <Social />
                    </span>
                    <HeaderLang/>
                </div>
            </div>
            
            <div className='header-navigation' id="headerNav">
                <HeaderNav />
            </div>
        </header>
    );
  }
  
  export default Header;
  
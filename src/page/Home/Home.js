import Roadmap from './Roadmap/Roadmap';
import About from './About/About'
import Banner from './Banner/Banner'
import Distributors from './Distributors/Distributors'
import Faq from './Faq/Faq'
import Gameplay from './Gameplay/Gameplay'
import Header from './Header/Header'
import Lagacy from './Lagacy/Lagacy'
import NftBlocks from './NftBlocks/NftBlocks'
import QuickLinks from './QuickLinks/QuickLinks'
import ShootToken from './ShootToken/ShootToken'
import Team from './Team/Team'
import HowTo from './HowTo/HowTo';
import TechPartners from './TechPartners/TechPartners';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(()=>{
    window.addEventListener('scroll', function(event) {
      var findMe = document.querySelectorAll('.animation');
      var isInViewport = function(elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      // add event on scroll
      findMe.forEach(element => {
        //for each .animation
        if (isInViewport(element)) {
          //if in Viewport
          element.classList.add("fadeIn");
        }
      });
    }, false);
  },[])
  return (
      <>
        <Header id="home" />
        <Banner/>
        <QuickLinks/>
        <Lagacy />
        <ShootToken />
        <NftBlocks/>
        <About />
        <Gameplay />
        <Faq />
        <Distributors />
        <Team />
        <Roadmap />
        <HowTo />
        <TechPartners />
        <Contact />
        <Footer />
      </>
  )
}

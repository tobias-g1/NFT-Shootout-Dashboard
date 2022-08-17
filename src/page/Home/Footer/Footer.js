import { useState } from 'react';
import Copyright from './Copyright'
import Disclaimer from './Disclaimer'
import './footer.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import TermsAndCondition from '../Modal/Modal';


export default function Footer() {
const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);
  return (
    <footer>
        <div className='footer-nav'>
            <div className='container'>
                <nav className='flex flex-wrap'>
                    <ul className='nav-left'>
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#roadmap'>Roadmap</a>
                        </li>
                        <li>
                            <a href='#marketplace'>MarketPlace</a>
                        </li>
                        <li>
                            <a href='#team'>Team</a>
                        </li>
                        <li>
                            <a href='https://nftshootout.com/blog' rel="noreferrer" target="_blank">Blog</a>
                        </li>
                        <li>
                            <a href='https://nftshootout.com/img/NFTshootout-Whitepaper-Final-V1.pdf' rel="noreferrer" target="_blank">Whitepaper</a>
                        </li>
                    </ul>
                    <ul className='nav-right'>
                        <li onClick={onOpenModal}>Terms and conditions</li>
                    </ul>
                    <Modal open={open} onClose={onCloseModal} center>
                        <TermsAndCondition />
                    </Modal>
                </nav>
            </div>
        </div>
        <div className='copyright'>
            <div className='container'>
                <Copyright />
            </div>
        </div>
        <div className='disclaimer'>
            <div className='container'> 
                <Disclaimer />
            </div>
        </div>
    </footer>
  )
}

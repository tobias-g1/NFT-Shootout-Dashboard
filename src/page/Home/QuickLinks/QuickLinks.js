import React from 'react'
import buyshoo from '../../../assets/images/icon-buyshoo.png'
import marketplace from '../../../assets/images/icon-marketplace.png'
import dashboard from '../../../assets/images/icon-dashboard.png'
import getyourteam from '../../../assets/images/icon-getteam.png'
import playtoearn from '../../../assets/images/icon-playtoearn.png'
import "./quickLinks.scss"
import { NavLink } from 'react-router-dom'

function QuickLinks() {
  return (
    <div className='quicklink-container'>
        <div className='container flex flex-wrap'>
            <div className='quick-link'>
                <img src={buyshoo} alt='img'/>
                <a href='#buy-shoo' className='btn-yellow'>Buy Shoo</a>
            </div>
            <div className='quick-link'>
                <img src={marketplace} alt='img'/>
                <a href='/' className='btn-yellow'>Marketplace</a>
            </div>
            <div className='quick-link'>
                <img src={dashboard} alt='img'/>
                <NavLink to="/dashboard" className='btn-yellow'>Dashboard</NavLink>
            </div>
            <div className='quick-link'>
                <img src={getyourteam} alt='img'/>
                <a href='/' className='btn-yellow'>Get your team</a>
            </div>
            <div className='quick-link'>
                <img src={playtoearn} alt='img'/>
                <a href='/' className='btn-yellow'>Play to earn</a>
            </div>
        </div>
    </div>
  )
}
export default QuickLinks
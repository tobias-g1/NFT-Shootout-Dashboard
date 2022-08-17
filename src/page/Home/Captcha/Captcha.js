import React, {useState} from 'react'
import './captcha.scss'

export default function Captcha() {
    let getRandom = Math.floor(100000 + Math.random() * 900000)
    const reloadCaptcha=(e)=> {
        e.target.nextElementSibling.innerHTML = Math.floor(100000 + Math.random() * 900000)
    }
  return (
    <>
        <div className="captcha flex flex-wrap">
            <span className="btnRefresh" onClick={reloadCaptcha}>Refresh Captcha</span>
            <span className='captchaNumber'>{getRandom}</span>
        </div>
        <div className='captcha-error error'>Please enter correct captcha.</div>
    </>
  )
}

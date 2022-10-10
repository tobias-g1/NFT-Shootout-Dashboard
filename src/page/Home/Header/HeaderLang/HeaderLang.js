import React, { useEffect } from 'react'

function HeaderLang() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
   }
    useEffect(() => {
      var addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])
  return (
    <div className='self-end lang-right'>
        <div className='lang-selector' id="google_translate_element">
        </div>
        <div className='wallet-selector'>
            <select>
                <option>Connect</option>
                <option>Wallet Connect</option>
                <option>Metamask</option>
                <option>Trust Wallet</option>
            </select>
        </div>
    </div>
  )
}
export default HeaderLang
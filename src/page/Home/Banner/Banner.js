import './Banner.scss'
function Banner() {
  return (
    <div className="hero-banner flex flex-wrap">
        <div className="banner-left">
            <div className="banner-btn">
                <a href="https://www.nftshootout.com/NFT-Shootout.exe" target="_blank" rel="noreferrer" className='btn-yellow'>DOWNLOAD V2 PC GAME</a>
            </div>
        </div>
        <div className="banner-right">
            <div className="banner-btn">
                <a href="https://nftshootout.com/img/NFTshootout-Whitepaper-Final-V1.pdf" rel="noreferrer" target="_blank" className='btn-black'>what is shoo?</a>
            </div>
        </div>
    </div>
  )
}
export default Banner;
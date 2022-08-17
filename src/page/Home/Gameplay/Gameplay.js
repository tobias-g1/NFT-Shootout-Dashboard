import gameplayleft from '../../../assets/images/gameplay-1.png'
import gameplayright from '../../../assets/images/gameplay-2.jpg'
import './gameplay.scss'

function Gameplay() {
  return (
    <div className='gameplay' id="marketplace">
        <div className='container'>
            <h2 className='animation fadeInLeft'>demo game is now available for<br/>download on <a href="https://www.nftshootout.com/NFT-Shootout.exe">pc</a>, <a href="/">windows</a>, <a target="_blank" href="https://play.google.com/store/search?q=nft%20shootout&c=apps&gl=GB">android</a></h2>
            <div className='gameplay-images flex animation fadeInLeft flex-wrap'>
                <div className='gameplay-left'>
                    <img src={gameplayleft} alt="gameplay"/>
                </div>
                <div className='gameplay-right'>
                    <img src={gameplayright} alt="gameplay"/>
                </div>
            </div>
            <div className='gameplay-content animation fadeInRight'>
                <h3>Gameplay</h3>
                <p>NFT Shootout is a turn-based Penalty Shootout strategy system, where you put your player NFTs up against other gamer’s player NFTs in a live game. You will have 5 penalties each per game, alternating penalties with your opponent. The team with the most penalty conversions after 5 penalties are deemed the winner. In the event of a tie after 5 penalties, both teams will enter a sudden death penalty shootout. Winner takes all.</p>
            </div>
        </div>
    </div>
  )
}
export default Gameplay
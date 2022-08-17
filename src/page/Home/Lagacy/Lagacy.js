import './lagacy.scss';
import football from '../../../assets/images/lagacy-football.png';
import basketball from '../../../assets/images/lagacy-basketball.png';
import baseball from '../../../assets/images/lagacy-baseball.png';
import golf from '../../../assets/images/lagacy-golf.png';
import boxing from '../../../assets/images/lagacy-boxing.png';
import tennis from '../../../assets/images/lagacy-tennis.png';
function Lagacy() {
  return (
    <div className="lagacy-wrapper">
        <div className="container flex">
            <div className="lagacy-title animation">
                <span>Build Your</span>Legacy
            </div>
            <div className='lagacy-games flex flex-wrap'>
                <div className='lagacy-game-active'>
                    <div className='lagacy-game'>
                        <img src={football} alt="" />
                        <div className='lagacy-game-name'>football </div>
                    </div>
                    <div className='lagacy-game-status'>
                        in-development
                    </div>
                </div>
                <div className='lagacy-game-disabled flex flex-wrap'>
                    <div className='lagacy-game animation'>
                        <img src={basketball} alt="" />
                        <div className='lagacy-game-name'>basketball</div>
                    </div>
                    <div className='lagacy-game animation'>
                        <img src={baseball} alt="" />
                        <div className='lagacy-game-name'>baseball</div>
                    </div>
                    <div className='lagacy-game animation'>
                        <img src={golf} alt="" />
                        <div className='lagacy-game-name'>golf</div>
                    </div>
                    <div className='lagacy-game animation'>
                        <img src={boxing} alt="" />
                        <div className='lagacy-game-name'>boxing</div>
                    </div>
                    <div className='lagacy-game animation'>
                        <img src={tennis} alt="" />
                        <div className='lagacy-game-name'>tennis</div>
                    </div>
                    
                    <div className='lagacy-game-status'>
                    FUTURE ADDITIONS
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Lagacy;
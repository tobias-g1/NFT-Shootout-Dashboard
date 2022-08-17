import { useState } from 'react';
import { useForm } from "react-hook-form";
import shoo from '../../../assets/images/icon-shoo.png';
import scholarship from '../../../assets/images/scholarship-icon.png';
import marketplace from '../../../assets/images/icon-marketplace1.png';
import dashboard from '../../../assets/images/dashboard.png';
// import stadium from '../../../assets/images/icon-stadium.jpg';
import coach from '../../../assets/images/icon-coach.jpg';
// import nft from '../../../assets/images/icon-nft.jpg';
import './nftblock.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import TermsAndCondition from '../Modal/Modal';
import Captcha from '../Captcha/Captcha';


function NftBlocks() {

    const { register, handleSubmit} = useForm();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  const list1 = [
      "Audited",
      "Renounced Contract",
      "2% Reflections",
      "2% Liquidity Tax",
      "Locked Liquidity to 2041",
      "BEP20 Token",
      "Buy now on Bibox",
      "Buy now PancakeSwap",
      "Buy now SukuSwap",
      "Buy now FibSwap",
      "Listed on CoinMarketCap",
      "Listed on CoinGeko",
      "Listed on CoinStats",
      "Listed on 40+ voting sites"
  ];
  const list2 = [
    "Find manager for good % split",
    "Or in-house loan 65/35 split",
    "Play 2 Earn income for all scholars",
    "Twice monthly pay-outs",
    "NFT or Shoot token Prizes for top scholars",
    "Play 100s of games in a day",
    "Divisions and Cup Matches soon",
    "Income estimated up to $5 per day",
    "Scholar program due 2022"
  ];
  
  const list3 = [
    "Shoo token required to buy & sell NFTs",
    "In-house marketplace not 3rd party",
    "Search by highest or lowest price",
    "Search by attributes & other data points"
  ];
  
  const list4 = [
    "Track all games & Income",
    "Track your scholars",
    "Track your affiliate income",
    "Track your Ad income",
    "Plus 100s of more features",
  ];
  
//   const list5 = [
//     "Ability to mint new players by traning (breeding)",
//     "Will need to buy in-game token to participate",
//     "Sell new NFTs to marketplace for a profit",
//     "Loan out your own NFTs to your own scholars",
//     "Upgrade your cards each year to mint top players",
//     "Estimated 4x income over a year from reselling",
//     "Can mint 52 new players per year, per youth pack",
//     "Only Youth packs can ming NEW NFTs to market",
//     "Takes 7 days to train a new youth to an adult NFT",
//     "Limited Youth Scout & Coach packs available"
//   ];
  
//   const list6 = [
//     "10% chance of legendary win",
//     'Payment in "SHOO" ONLY',
//     "Sell NFTs on marketplace when live",
//     "Income estimated up to $8 per day*",
//     "Loan your cards to scholars",
//     "Earn Shoo tokens for playing the game",
//     "150 and up to 2,000 player NFTs available"
//   ];

  const buyOption =()=> {
    let getOption = document.getElementById('buy_option').value
    window.location.href = getOption
  }

//   const refreshCaptcha =(e)=> {
//       const getCaptcha = document.getElementById('captcha_code_s3');
//       getCaptcha.setAttribute('src', 'https://nftshootout.com/captcha_code.php')
//       return false
//   }

  const scholarForm =(data)=> {
      const statusMessage = document.getElementById('response_msg_scholar'),
            getForm = document.getElementById('scholar_form');
      const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('https://nftshootout.com/api/becomescholar.php', requestOptions)
    .then(response => {
        // console.log('response.status', response);
        if(!response.ok) {
            statusMessage.innerHTML = 'Network response was not OK';
            statusMessage.classList = "error"
            // throw new Error('Network response was not OK');
        } else {
            getForm.reset();
            statusMessage.innerHTML = 'Thank you for your interest.';
            statusMessage.classList = "success"
        }
        return response.blob();
    })
    .catch(error => {
        statusMessage.innerHTML = error;
        statusMessage.classList = "error"
        // console.error('There has been a problem with your fetch operation:', error);
    });
  }

  const matchCaptcha =(e)=> {
      const captchaInput = e.target.value
      const mainCaptcha = e.target.nextSibling.children[1].innerHTML
      const captchaErr = document.getElementById('scholar_form').children[1].children[0].children[3];
      if(captchaInput == mainCaptcha) {
        document.querySelectorAll('.captcha_view')[0].nextElementSibling.removeAttribute('disabled')
        captchaErr.style.display = "none";
      } else {
        document.querySelectorAll('.captcha_view')[0].nextElementSibling.setAttribute('disabled', 'disabled')
        captchaErr.style.display = "block";
      }
  }
  return (
    <div className='container flex flex-wrap'>
        <div className='nft-block'>
            <h3 className='nft-title'>SHOOT TOKEN</h3>
            <div className='nft-icon'><img src={shoo} alt="" /></div>
            <div className='nft-link'><a href="https://bscscan.com/token/0x0fcc11f873360450a1afd8cb7cfe0a9d787cc25e" target="_blank" rel='noreferrer'>Click Here to view on BSCscan</a></div>
            {list1.map(list => <div className='nft-list' key={list}>{list}</div>)}
            <div className="buy_now_form">
                <h4>BUY ON...</h4>
                <div className='form-element'>
                    <select name="buy_option" id="buy_option" onChange={buyOption} className="buy_option">
                        <option value="">Select</option>
                        <option value="https://www.bibox.com/en">Bibox</option>
                        <option value="https://pancakeswap.finance/swap?outputCurrency=0x0fcc11F873360450a1afD8CB7Cfe0a9d787cc25E">PancakeSwap</option>
                        <option value="https://app.sokuswap.finance/bsc/#/swap">SokuSwap</option>
                        <option value="https://dex.fibswap.io/">FibSwap</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='nft-block'>
            <h3 className='nft-title'>scholarship</h3>
            <div className='nft-icon'><img src={scholarship} alt="" /></div>
            {list2.map(list => <div className='nft-list' key={list}>{list}</div>)}
            <div className="buy_now_form">
                <h4>APPLY TO BECOME A SCHOLAR</h4>
                <p>Please fill out your details below</p>
                <div>
                    <form id="scholar_form" onSubmit={handleSubmit(scholarForm)}>
                        <div className='nft-details flex flex-wrap'>
                            <div className='form-element'>
                                <label htmlFor="fullname">Full name</label>
                                <input type="text" 
                                    id="s_fullname" 
                                    placeholder=""
                                    required={true}
                                    {...register("fullname", { required: true })} 
                                />
                            </div>
                            <div className='form-element'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="s_email" 
                                    placeholder="" 
                                    required={true}
                                    {...register("email", { 
                                        required: true, 
                                        pattern: {
                                            value: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                                            message: "invalid email address"
                                        }
                                    })}
                                />
                            </div>
                        </div>
                        <div className="captcha_view">
                            <div className='form-element'>
                                <label htmlFor="fullname">Enter Captcha</label>
                                <input type="text" 
                                    name="captcha_s3" 
                                    id="captcha_s3" 
                                    placeholder="Enter Captcha" 
                                    required={true}
                                    onInput={matchCaptcha}
                                    {...register("captcha", { required: true })} 
                                    autoComplete="off" />
                                {/* <div className="captcha_item">
                                    <img id="captcha_code_s3" alt="captcha" src="https://nftshootout.com/captcha_code.php" />
                                    <span name="submit" className="btnRefresh" onClick={refreshCaptcha}>Refresh Captcha</span>
                                </div> */}
                                <Captcha />
                                <div id="response_msg_scholar"></div>
                            </div>
                        </div>
                        <button type="submit" disabled className='btn-yellow'>Submit</button>
                        <p className='concent' onClick={onOpenModal}>By clicking submit you are agreeing to our <u>T&amp;Cs</u></p>
                        
                        <Modal open={open} onClose={onCloseModal} center>
                            <TermsAndCondition />
                        </Modal>
                    </form>
                </div>
            </div>
        </div>
        <div className='nft-block'>
            <div className='nft-content'>
                <h3 className='nft-title'>marketplace</h3>
                <div className='nft-icon'><img src={marketplace} alt="" /></div>
                {list3.map(list => <div className='nft-list' key={list}>{list}</div>)}
            </div>
            <div className='nft-content mt-3'>
                <h3 className='nft-title'>Dashboard</h3>
                <div className='nft-icon'><img src={dashboard} alt="" /></div>
                {list4.map(list => <div className='nft-list' key={list}>{list}</div>)}
            </div>
            
        </div>
        <div className='nft-block flex flex-wrap'>
            <div className='nft-content'>
                <h3 className='nft-title'>stadiums</h3>
                <div className='nft-icon'>
                    <video width="100%" height="180" muted loop autoPlay={"autoplay"}>
                        <source src="https://nftshootout.com/img/STADIUMS.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* {list4.map(list => <div className='nft-list' key={list}>{list}</div>)} */}
            </div>
            <div className='middle-section'>
                <h3>Sold out</h3>
            </div>
            <div className='bottom-section'></div>
        </div>
        <div className='nft-block'>
            <h3 className='nft-title'>yOUTH SCOUT COACH</h3>
            <div className='nft-icon'><img src={coach} alt="" /></div>
            {/* {list5.map(list => <div className='nft-list' key={list}>{list}</div>)} */}
            
            {/* <div className="buy_now_form">
                <h4>BUY NOW...</h4>
                <div className='form-element'>
                    <select name="buy_option" id="buy_option_youth" className="buy_option">
                        <option value="">Select</option>
                        <option value="Youth &amp; Scout Coach 2 Pack ₤500">Youth &amp; Scout Coach &nbsp; 2 Pack &nbsp; ₤500</option>
                        <option value="Youth &amp; Scout Coach 4 Pack ₤900">Youth &amp; Scout Coach &nbsp; 4 Pack &nbsp; ₤900</option>
                        <option value="Youth &amp; Scout Coach 6 Pack ₤1,300">Youth &amp; Scout Coach &nbsp; 6 Pack &nbsp; ₤1,300</option>
                    </select>
                </div>
            </div> */}
            <div className='middle-section'>
                <h3>Sold out</h3>
            </div>
            <div className='bottom-section'></div>
        </div>
        <div className='nft-block'>
            <h3 className='nft-title'>NFT Player Cards</h3>
            <div className='nft-icon'>
            <video width="100%" height="180" muted loop autoPlay={"autoplay"}>
                    <source src="https://nftshootout.com/img/nft_player_card.mp4" type="video/mp4" />
                </video>
            </div>
            {/* {list6.map(list => <div className='nft-list' key={list}>{list}</div>)} */}
            {/* <div className='terms-link'>*Please see T&Cs for full details</div>
            <div className="buy_now_form">
                <h4>BUY NOW...</h4>
                <div className='form-element'>
                    <select name="buy_option" id="buy_option_1" className="buy_option">
                        <option value="">Select</option>
                        <option value="150 NFTs, Striker &amp; Goalie $1,800 ($12 Per NFT)">150 NFTs, Striker &amp; Goalie $1,800 ($12 Per NFT)</option>
                        <option value="300 NFTs, Striker &amp; Goalie $3,300 ($11 Per NFT)">300 NFTs, Striker &amp; Goalie $3,300 ($11 Per NFT)</option>
                        <option value="1,000 NFTs, Striker &amp; Goalie $10,000 ($10 Per NFT)">1,000 NFTs, Striker &amp; Goalie $10,000 ($10 Per NFT)</option>
                        <option value="2,000 NFTs, Striker &amp; Goalie $18,000 ($9 Per NFT)">2,000 NFTs, Striker &amp; Goalie $18,000 ($9 Per NFT)</option>
                    </select>
                </div>
            </div> */}
            <div className='middle-section'>
                <h3>Sold out</h3>
            </div>
            <div className='bottom-section'></div>
        </div>
    </div>
  )
}

export default NftBlocks;
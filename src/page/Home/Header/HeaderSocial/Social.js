import twitter from '../../../../assets/images/social-twitter.png'
import telegram from '../../../../assets/images/social-telegram.png'
import youtube from '../../../../assets/images/social-youtube.png'
import facebook from '../../../../assets/images/social-facebook.png'
import linktree from '../../../../assets/images/social-linktree.png'

function Social() {
  const getSocial = [{
    "link": 'https://twitter.com/NfTshootout',
    "icon": twitter,
  },
  {
    "link": 'https://t.me/NFTShootout',
    "icon": telegram,
  },
  {
    "link": 'https://www.youtube.com/channel/UCtCbdo5Q-acSubq_IPSMxlQ',
    "icon": youtube,
  },
  {
    "link": 'https://www.facebook.com/nftshootout',
    "icon": facebook,
  },
  {
    "link": 'https://linktr.ee/NFTShootOut',
    "icon": linktree,
  },
  ]
  return (
    <div className="header-social">
        <ul className='flex flex-wrap'>
          {getSocial.map((social, index) => (
            <li key={index}>
              <a href={social.link} title={social.link} rel="noreferrer" target="_blank">
                <img src={social.icon} alt="social"/>
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Social;

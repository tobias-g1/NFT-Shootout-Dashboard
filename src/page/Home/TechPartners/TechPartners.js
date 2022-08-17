import './techpartners.scss'
import partner from '../../../assets/images/partner.jpg'
import partner1 from '../../../assets/images/partner1.jpg'
import partner2 from '../../../assets/images/partner2.jpg'
import partner3 from '../../../assets/images/partner3.jpg'

export default function TechPartners() {
    const techpartner = [
        {
            "img": partner,
            "link": 'https://www.auxanoglobalservices.com/'
        },
        {
            "img": partner1,
            "link": 'https://www.unrealengine.com/en-US/unreal-engine-5'
        },
        {
            "img": partner2,
            "link": 'https://aws.amazon.com/'
        },
        {
            "img": partner3,
            "link": 'https://www.binance.org/en/smartChain'
        }
    ]
  return (
    <div className='container tech-partners'>
        <h2>Technology Partners</h2>
        <div className='flex partners-list flex-wrap'>
            {techpartner.map((list, index) => 
                <a href={list.link} target="_blank" rel='noreferrer' key={index}>
                    <img src={list.img} alt="partner" />
                </a>)
            }
        </div>
    </div>
  )
}

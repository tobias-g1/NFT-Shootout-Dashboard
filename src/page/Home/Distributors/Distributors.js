import exchange from '../../../assets/images/bibox.png'
import exchange1 from '../../../assets/images/exchng1.png'
import exchange2 from '../../../assets/images/exchng2.png'
import exchange3 from '../../../assets/images/exchng3.png'
import audit1 from '../../../assets/images/audit1.png'
import audit2 from '../../../assets/images/audit2.png'
import listed1 from '../../../assets/images/listed1.png'
import listed2 from '../../../assets/images/listed2.png'
import listed3 from '../../../assets/images/listed3.png'
import listed4 from '../../../assets/images/listed4.png'
import listed5 from '../../../assets/images/crypto.png'
import feature1 from '../../../assets/images/feature1.png'
import feature2 from '../../../assets/images/feature2.png'
import feature3 from '../../../assets/images/feature3.png'
import feature4 from '../../../assets/images/feature4.png'
import feature5 from '../../../assets/images/feature5.png'
import article from '../../../assets/images/article.png'
import article1 from '../../../assets/images/article1.png'
import article2 from '../../../assets/images/article2.png'
import article3 from '../../../assets/images/article3.png'
import article4 from '../../../assets/images/article4.png'
import article5 from '../../../assets/images/article5.png'
import article6 from '../../../assets/images/article6.png'
import article7 from '../../../assets/images/article7.png'
import article8 from '../../../assets/images/article8.png'
import article9 from '../../../assets/images/article9.png'
import article10 from '../../../assets/images/article10.png'
import article11 from '../../../assets/images/article11.png'
import './distributors.scss'

function Distributors() {
    const distributor = [
        {
            'img': article,
            'visitorCount': '71m',
            'authorityCount': '92'
        },
        {
            'img': article1,
            'visitorCount': '10m',
            'authorityCount': '85'
        },
        {
            'img': article2,
            'visitorCount': '428k',
            'authorityCount': '88'
        },
        {
            'img': article3,
            'visitorCount': '8m',
            'authorityCount': '90'
        },
        {
            'img': article4,
            'visitorCount': '1.4m',
            'authorityCount': '83'
        },
        {
            'img': article5,
            'visitorCount': '549k',
            'authorityCount': '76'
        },
        {
            'img': article6,
            'visitorCount': '1m',
            'authorityCount': '77'
        },
        {
            'img': article7,
            'visitorCount': '191k',
            'authorityCount': '76'
        },
        {
            'img': article8,
            'visitorCount': '3.7k',
            'authorityCount': '67'
        },
        {
            'img': article9,
            'visitorCount': '116k',
            'authorityCount': '64'
        },
        {
            'img': article10,
            'visitorCount': '2.9m',
            'authorityCount': '78'
        },
        {
            'img': article11,
            'visitorCount': '524k',
            'authorityCount': '74'
        }
    ]
  return (
    <div className='distributors-section'>
        <div className='container distributors animation fadeInBottom'>
            <h2>Exchanges</h2>
            <div className='exchanges flex flex-wrap'>
                <div className='each-exchange'>
                    <a href='https://www.bibox.com/en' target="_blank" rel="noreferrer">
                        <img src={exchange} alt="exchange"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://pancakeswap.finance/swap?outputCurrency=0x0fcc11F873360450a1afD8CB7Cfe0a9d787cc25E' target="_blank" rel="noreferrer">
                        <img src={exchange1} alt="exchange"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://app.sokuswap.finance/bsc/#/swap' target="_blank" rel="noreferrer">
                        <img src={exchange2} alt="exchange"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://dex.fibswap.io/' target="_blank" rel="noreferrer">
                        <img src={exchange3} alt="exchange"/>
                    </a>
                </div>
            </div>
        </div>
        
        <div className='container distributors audits animation fadeInBottom'>
            <h2>Contract audits</h2>
            <div className='exchanges flex flex-wrap'>
                <div className='each-exchange'>
                    <a href='https://www.certik.com/' target="_blank" rel="noreferrer">
                        <img src={audit1} alt="audit"/>
                    <p>NFT smart contract in process</p>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://github.com/TechRate/Smart-Contract-Audits/blob/main/December/Shoot%20Full%20Smart%20Contract%20Security%20Audit.pdf' target="_blank" rel="noreferrer">
                        <img src={audit2} alt="audit"/>
                    <p>SHOOT TOKEN</p>
                    </a>
                </div>
            </div>
        </div>
        
        <div className='container distributors listed  animation fadeInBottom'>
            <h2>Listed in</h2>
            <div className='exchanges flex flex-wrap'>
                <div className='each-exchange'>
                    <a href='https://coinmarketcap.com/currencies/nftshootout/' target="_blank" rel="noreferrer">
                        <img src={listed1} alt="listed"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://www.coingecko.com/en/coins/shoot' target="_blank" rel="noreferrer">
                        <img src={listed2} alt="listed"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://nomics.com/assets/shoo-shoot' target="_blank" rel="noreferrer">
                        <img src={listed3} alt="listed"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://coinstats.app/coins/shoot/' target="_blank" rel="noreferrer">
                        <img src={listed4} alt="listed"/>
                    </a>
                </div>
                <div className='each-exchange'>
                    <a href='https://crypto.com/price/nftshootout' target="_blank" rel="noreferrer">
                        <img src={listed5} alt="listed"/>
                    </a>
                </div>
            </div>
        </div>

        <div className='container distributors featured'>
            <h2>As featured in</h2>
            <div className='exchanges'>
                <div className='publishers'>
                    <h3>Published on affiliates of</h3>
                    <img src={feature1} alt="featured"/>
                    <img src={feature2} alt="featured"/>
                    <img src={feature3} alt="featured"/>
                    <img src={feature4} alt="featured"/>
                </div>
                <div className='published flex flex-wrap'>
                    Published in <img src={feature5} alt="featured"/>
                </div>
            </div>

            <div className='view-all'>
                <p>Click below to view ALL 520 articles</p>
            </div>
            <a href='https://www.brandpush.co/r/1640783442704' className='distributor-link' rel="noreferrer" target="_blank">
                <div className='distributor-logos_container flex flex-wrap'>
                    {distributor.map((list, index) =>
                        <div className='distributor-logos flex flex-wrap' key={index}>
                            <div className='dis-logo flex flex-wrap'>
                                <img src={list.img} alt={list.img}/>
                            </div>
                            <div className='vis-auth flex flex-wrap'>
                                <div className='vis-count'>
                                    <h5>{list.visitorCount}</h5><p>Visitors</p>
                                </div>
                                <div className='vis-count'>
                                    <h5>{list.authorityCount}</h5><p>Authority</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </a>
        </div>
    </div>
  )
}
export default Distributors
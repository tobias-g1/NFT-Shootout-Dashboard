import './roadmap.scss'
import phase1flag from '../../../assets/images/phase1.png'
import phase2flag from '../../../assets/images/phase2.png'
import phase3flag from '../../../assets/images/phase3.png'
import phase4flag from '../../../assets/images/phase4.png'

export default function Roadmap() {
    const phase1 = [
        'Completed Private sale 48 hours',
        'Completed Pre-sale in 48 hours',
        'Listed on PancakeSwap',
        'Listed on CoinMarketCap.com',
        'Listed on CoinGecko.com',
        'Burned 20% of supply',
        'Launched Game Demo Version 1.0',
        'Published AMAs, Podcast, YouTube & Ticktok'
    ]
    const phase2 = [
        'Listed on SokuSwap',
        'Listed on FibSWAP',
        'Listed on Nomics & CoinStats.com',
        'Listed on 40+ crypto voting sites',
        '540 News Articles published',
        'Burned another 10% of supply',
        'AMAs, Twitter Giveaways completed',
        'TechRate.org Audited',
        'Renounced Contract',
        '14,000 members between all social media',
        'Stadium and Player NFT sales now LIVE',
        'Game Demo V.1.2 now updated',
        'Updated website and coin logo'
    ]
    const phase3 = [
        '400 trillion token burned',
        '20,000 NFTs SOLD OUT',
        '106 Stadium now fully staked',
        'BTC/SHOO pair exchange listing on Bibox',
        'Update website with new design black & gold theme',
        'Launch football game demo on Desktop, Windows & Android',
        'Start contacting Venture Capital for funding',
        'Launch game demo on Apple ',
        'Launch beta marketplace',
        'Launch beta dashboard',
        'Distribute NFTs',
        'P2E football game launch',
        'Launch scout cards for minting new players',
        'Launch scholar program',
        'Launch affiliate program',
        'Release whitepaperV2',
        'Social media marketing campaign'
    ]
    const phase4 = [
        'Develop Basketball shootout game & others',
        'Launch P2E platform to allow multiple 3rd party games',
        'Integrate with VR & the metaverse'
    ]
  return (
    <div className='roadmap-container' id="roadmap">
        <div className='container'>
            
        <h2 className='animation fadeInBottom'>Roadmap</h2>

        <div className='phase-wrapper'>
            <div className='phase flex flex-wrap'>
                <div className='flag animation fadeInLeft'>
                    <img src={phase1flag} alt="" />
                </div>
                <div className='phase-data animation fadeInRight'>
                    {phase1.map(list => <div className='phase-list' key={list}>{list}</div>)}
                </div>
            </div>

            <div className='phase flex flex-wrap'>
                <div className='flag animation fadeInLeft'>
                    <img src={phase2flag} alt="" />
                </div>
                <div className='phase-data animation fadeInRight'>
                    {phase2.map(list => <div className='phase-list' key={list}>{list}</div>)}
                </div>
            </div>

            <div className='phase flex flex-wrap'>
                <div className='flag animation fadeInLeft'>
                    <img src={phase3flag} alt="" />
                </div>
                <div className='phase-data fadeIn'>
                    {phase3.map(list => <div className='phase-list' key={list}>{list}</div>)}
                </div>
            </div>

            <div className='phase flex flex-wrap'>
                <div className='flag animation fadeInLeft'>
                    <img src={phase4flag} alt="" />
                </div>
                <div className='phase-data animation fadeInRight'>
                    {phase4.map(list => <div className='phase-list' key={list}>{list}</div>)}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

import './about.scss'

function About() {
    const dataList = [
        {
            "title": "P2E GAMING PLATFORM",
            "content": "Our platform aims to simplify bringing new Play to Earn games to market by providing the marketplace, dashboard & coin integration to save up to 80% in development time.  Initially we are launching our own games first, then we will open our platform up to 3rd party game developers for partnership opportunities."
        },
        {
            "title": "Stadium Owners",
            "content": "Owners of stadiums will earn passive income from all winning games played on their stadium. We will be minting stadiums roughly at a rate of 1 stadium to 100 players to ensure all stadium owners earn good passive income. Stadium owners will also earn a share in any future advertising revenue from banners placed inside their stadiums. To own a stadium, you must stake shoo token for at least 6 months up to 12 months. All staked tokens are fully refundable including all reflections earned during that time. Ideal for holders that want to earn passive income at the same time. Stadium owners are free to sell their stadium for a profit on the marketplace anytime even if its staked."
        },
        {
            "title": "Scholar Programme",
            "content": "The Scholar Programme will work in a similar way to Axie Infinity. When a manager owns enough NFT player cards, they can allow a scholar to play the game for them. Any In-Game token winnings will then be split dependent on the agreement. NFTshootout.com can also loan our NFT cards to scholars to pay off over time. Scholar managers will be incentivised to hire more scholars as they will be rewarded with upgraded cards the more scholars they signup."
        },
        {
            "title": "Affiliate Program",
            "content": "Our affiliate program will allow anyone to sell NFTs from marketplace using their unique affiliate URL upon signup. Affiliates will earn 10% per sale. Affiliates are free to post their affiliate URL on their social media ro find buyers."
        },
        {
            "title": "Youth Scout & Coach rewards",
            "content": "In order for new players to join the game, a youth scout coach NFT cards are required. These cards allow you to sell your newly minted player NFT cards to list them on the marketplace. To mint new youth player, you must buy the in-game token to start the process. You are free to sell or loan to scholars."
        }
    ]
  return (
    <div className='container about-section' id="about">
        {dataList.map((data, index) => (
            <div className='abt-sec' key={index}>
                <h2 className='animation fadeInLeft'>{data.title}</h2>
                <p className='animation fadeInRight mt-0'>{data.content}</p>
            </div>
        ))}
    </div>
  )
}
export default About;
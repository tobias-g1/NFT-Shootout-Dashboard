import './faq.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Faq() {
    const faqList = [
        {
            "ques": "What is NFT SHOOTOUT?",
            "ans": "<p>NFTshootout is a play to earn blockchain football game where you can earn tokens from playing football using the NFT cards that will be on sale from our marketplace. We decided that we wanted to create a game that was more than the current 2D graphics currently available in the play-to-earn gaming arena. Our goal was to create something enjoyable, addictive and visually appealing to the gamers.</p>"
        },
        {
            "ques": "What is your in-game coin?",
            "ans": "<p>Our shoo coin is used for in-game rewards. It will be a form of a virtual shoo during gameplay due to multiple micro in-game rewards it’s not viable to have shoo 100% on the blockchain during gameplay due to all the gas fees , so each win for example will be a digital in-game shoo, that way all micro transactions are not charged any gas fees. Stadium owners, scholars and managers will all benefit from zero transaction fees during all in-game transactions. Only when you click “Cash out” does the in-game shoo get converted to actual shoo that will get sent to your wallet address which you would provide when creating an account and filling out your profile.</p>"
        },
        {
            "ques": "How do I buy Shoot (SHOO) and tokens?",
            "ans": "<p>SHOO is currently available on PancakeSwap, SokuSwap and FibSWAP and other decentralised exchanges coming soon. We have placed a guidance on our website of how to purchase SHOO on PancakeSwap.</p>"
        },
        {
            "ques": "What are the utilities of the NFTs that will be on sale? Are they meant to be held as simple collectibles or will they have additional benefits?",
            "ans": "<p>All of the NFTs will generate an earnable income whilst playing the game. You can collect them of course but the main function is making money from them. Certain player NFTs will be super rare & some will have higher attributes. Therefore, they will be worth more. We will have our own marketplace for buying and trading these NFTs. Each player NFT will have its own skills and specific attributes, which will be used in-game. The higher rated players will be sought after, as they will have a higher chance of scoring or saving a penalty. Having said that, the game is not just about having the best players with the highest skill rating; tactics will still have a massive part to play in the game, as it does in real life. There will be an element of skill required to make sure you can maximise your rewards.</p>"
        },
        {
            "ques": "How will users be able to trade their NFTs?",
            "ans": "<p>Users will have the opportunity to buy, sell or loan out their NFTs through our in-game marketplace. Prices will be set by the owner of an NFT and this will be advertised for sale or loanable to scholars, loaning NFTs to scholars provides additional methods of income within the game for both the scholar and the manager. Additionally, youth scout & manager cards offer you to mint new players in the game. The gameplay features we discuss further in our gameplay document on our website.</p>"
        },
        {
            "ques": "How will Stadium NFTs work?",
            "ans": "<p>We will be launching stadium NFTs at a ratio of around 1 to every 100 players. Gamers will be able to stake their Shoot token in order to earn in-game token rewards from games played in the stadium. These rewards can be cashed out at anytime. After a fixed period, you can claim your staked Shoot tokens back, including all earned reflections by giving up any potential future rewards. However you STILL own the stadium NFT, which you can also sell, swap, rent out, do a deal with a scholar manager or re-stake part of or the full Shoot value for the stadium at a later date. You can continue to earn income for as long as your Shoot tokens are staked. Even after the staking period ends, you can continue month to month or re-lock in a new deal. You will also have the opportunity to sell or rent out your stadium NFTs on the marketplace at anytime during or after the staking period. Those that own stadiums and have shoo staked will benefit from earning income from all games played in their stadium. In addition, stadium owners will earn a 50% share of all in-game ad revenue from banners. There are many other benefits that will be included in stadium ownership as the game evolves.</p><p>With a single stadium ownership, we estimated an ROI on your initial stake to be around 1 year; if the Shoot token remains staked for the 12 month period. We also offer a 6 month stake period and we may introduce a 2 year stake for even higher rewards. If you own a stadium and run your own scholars, then you could double or triple the ROI depending how many scholars you have and how you market the use of your stadium. Essentially the more games that are played in your stadium the more opportunity you have to earn rewards. Deals can also be made if you find your own sponsorship deals with actual football players or find your own advertising partners. Essentially you own the freehold of your stadium and the NFT is yours for as long as you own it; even if Shoo token is not staked</p>"
        },
        {
            "ques": "Is NFTshootout a game compatible with mobile devices like a phone or tablet or is it only possible to play on a PC?",
            "ans": "<p>Right now the V1 demo is only available on PC. However, Version 2 will be available on all platforms this year and we hope to be working on a collaboration with a games console in 2023.</p>"
        },
        {
            "ques": "Play-to-earn games are a really good way to generate income, but sometimes it's difficult to start playing them because their initial investment is expensive. Will you offer a free to play option for gamers who can’t afford the initial investment of player NFTs? ",
            "ans": "<p>Yes, we will have not only a demo free to play option always available, but we can also lend you the NFTs to play, this will work by NFTshootout loaning the player NFT cards to the gamer, allowing them to start playing and earning straight away. We will charge a commission, which will be taken from their winnings every game. Eventually theses gamers will be able to build up enough rewards to invest in their own player NFTs in the future. A free to play option is also beneficial for us, as we will be able to advertise on certain platforms promoting a free to play game, which doesn't breach their internal advertising rules around cryptocurrency. Our aim is to eventually convert every Free-to-play gamer to a Play-to-earn gamer. </p>"
        },
        {
            "ques": "Do the token holders have the right to participate in the governance of the project? On what kind of decisions can they vote on about the project?",
            "ans": "<p>No voting is not set up. However, we are listening to the community for suggestions and we can cast community votes. We are very hands-on in our community social media groups and discuss all ideas with everyone. We have implemented many new ideas to our game thanks to community input. You will see some of these ideas take shape as the game evolves. </p>"
        },
        {
            "ques": "Hackers actively target cryptocurrency projects daily. How will NFTshootout safeguard players assets?",
            "ans": "<p>Our first step was to renounce ownership of Shoot token. This ensured no person had control over the non-circulating supply and also the contract that controls it. It is completely independent. We also had an independent company audit the smart contract for Shoot which has come back positive. Shoot is on the Binance Smart Chain. Our nfts and in-game token will also be on Binance Smart Chain and users will be able to connect their metamask or Trustwallets to our game in order to access, store and interact with any game assets they own. The security of the game will be carefully reviewed and considered. It is a high priority for us that users feel confident that their assets are safe and secure. We are already in consultation with third party companies that specialise in cyber security threats and can assist us ensuring security measures are in place to obstruct and prevent malicious actors from attacking the integrity of our game, ultimately protecting users assets. </p>"
        },
        {
            "ques": "Most NFTs games currently suffer a low player base due to expensive initial costs for a new player to take part in the game. How will NFTshootout attract a large group of players?",
            "ans": "<p>NFTshootout will target Axie scholars that can't find a scholar manager. We can initially loan them NFTs and they can pay off their NFTs over a few months. We currently have a database of over 4,000 axie scholars we will contact when the game is live, this also helps beta test the game so we can make improvements. We are also experiencing viral growth in Asia on our social platforms such as Facebook and considering 40% of the planet, around 3 billion people earn under ₤5 a day, I don’t feel we will have any trouble finding new players. Since covid, people have found new ways to earn income online which is why also Axie infinity has over 1.8 million players. Our goal is to capture the same market that has propelled axie to the top ranks. We believe Play to Earn gaming is just in its infancy and there is massive potential for growth.</p>"
        },
        {
            "ques": "What does the future look like for NFTshootout?",
            "ans": "<p>We strongly believe that Football is a known global sport played by billions around the world. Our game will be designed with simplicity in mind. No need to learn how a new game functions or how characters work. There is no learning curve to a football game.  Keeping things simple and having an addictive gameplay loop in mind is key.  If football is proven successful then the introduction to a Basketball shootout game in 2023 using the same website, same marketplace and same token could be on the cards.</p><p>As more and more people play the game, then the demand for stadiums and future basketball courts will mean more shoo tokens that are tied up in the game. Once our marketplace opens then ALL NFT sales and new stadiums that are staked will ALL be taken in shoo token. This creates scarcity for the shoo token as there will be no more minting of shoo token ever as the smart contract is renounced and audited, so not even the owners can change anything </p>"
        }
    ]
  return (
    <Accordion className='faq-container container '>
        <h2 className='animation fadeInLeft'>FAQ's</h2>
        {faqList.map((data, index) => (
            <div key={index} className="animation fadeInBottom">
                <AccordionItem className='faq-section'>
                    <AccordionItemHeading className='faq-title'>
                        <AccordionItemButton>{data.ques}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='faq-content' dangerouslySetInnerHTML={{__html: data.ans}}>
                    </AccordionItemPanel>
                </AccordionItem>
            </div>
        ))}
        
    </Accordion>
  )
}
export default Faq
import './howto.scss';
import warning from '../../../assets/images/Warning.jpg'
import useCopy from 'use-copy';


export default function HowTo() {
    const [copied, copy, setCopied] = useCopy('0x0fcc11F873360450a1afD8CB7Cfe0a9d787cc25E');

    const copyText = (e) => {
        // debugger
        // console.log('e.previousElement.defaultValue', e.target.previousElementSibling.value)
        copy();

        setTimeout(() => {
        setCopied(false);
        }, 3000);
    };
  return (
    <div className='container'>
        <div className='flex flex-wrap'>
            <div className='how-to-container animation fadeInLeft'>
                <h3>How to buy shoot token</h3>
                <p>Shoot token is now available on</p>
                <ul className="text-left">
                    <li><a href="/"><u>www.PancakeSwap.finance</u></a></li>
                    <li><a href="/"><u>www.app.sokuswap.finance</u></a></li>
                    <li><a href="/"><u>www.dex.fibswap.io</u></a></li>
                    <li><a href="https://www.bibox.com/en"><u>https://www.bibox.com/en</u></a></li>
                </ul>
                <p>You will need to connect your MetaMask or Trust Wallet</p>
                <p>you can learn how to connect your wallet HERE</p>
                <div className="vd">
                    <img src={warning} alt="warning" />
                </div>
            </div>
            <div className='how-to-container animation'>
                <h3>How to add "Shoo" token to MetaMask</h3>
                <p>Shoot token is now available on</p>
                <ul className="text-left">
                    <li><b>1. Install MetaMask</b> <a href="https://metamask.io/" rel="noreferrer" target="_blank">metamask.io.</a></li>
                    <li><b>2. Add Binance Smart Chain to Metamask</b></li>
                    <li><b>3. Click "import address"</b></li>
                    <li className="text-break">
                        <b>4. Input contract address</b><br/>
                        <span className="contract_address">
                            <textarea className="copy-id1" readOnly="" defaultValue="0x0fcc11F873360450a1afD8CB7Cfe0a9d787cc25E"></textarea>
                            <button className="click-to-copy btn-yellow" onClick={copyText} data-copyfield="copy-id1">
                                {copied ? "Copied to clipboard" : 'click to copy contract address'}
                            </button>
                        </span> 
                    </li>
                    <li><b>5. Add Name:</b> SHOOT</li>
                    <li><b>6. Add Symbol:</b> Shoo</li>
                    <li><b>7. Add Decimal:</b> 18</li>
                </ul>
                <p className="m-0">Follow the instructions of this <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" rel="noreferrer" target="_blank">link.</a></p>
            </div>
            <div className='how-to-container animation fadeInRight'>
                <h3>How to add "Shoo" token to Trust Wallet</h3>
                <p>Shoot token is now available on</p>
                <ul className="text-left">
                    <li><b>1. Download the Trust Wallet app</b></li>
                    <li><b>2. Add Custom Token</b></li>
                    <li><b>3. Select "Smart Chain"</b></li>
                    <li className="text-break">
                        <b>4. Input contract address</b><br/>
                        <span className="contract_address">
                            <textarea className="copy-id" readOnly="" defaultValue="0x0fcc11F873360450a1afD8CB7Cfe0a9d787cc25E"></textarea>
                            <button className="click-to-copy btn-yellow" data-copyfield="copy-id">click to copy contract address</button>
                        </span>
                    </li>
                    <li><b>5. Add Name:</b> SHOOT</li>
                    <li><b>6. Add Symbol:</b> Shoo</li>
                    <li><b>7. Add Decimal:</b> 18</li>
                </ul>
                <p className="m-0">Follow this youtuber for instruction <a href="https://www.youtube.com/watch?v=lsZuTl4bsAk" rel="noreferrer" target="_blank">here.</a></p>
            </div>
        </div>
    </div>
  )
}

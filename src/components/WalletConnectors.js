import { useState } from "react";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { useWeb3React } from "@web3-react/core";
import { ClipLoader } from "react-spinners";
import { injected } from "../web3";
import { IMAGE_SRC } from "../config/image";

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",
};
const POLLING_INTERVAL = 12000;

const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

const fortmatic = new FortmaticConnector({
  apiKey: "pk_live_5BC3138B38371A1F",
  chainId: 1,
});

const connectorsByName = {
  Metamask: {
    provider: injected,
    description: "Easy-to-use browser extension.",
    icon: IMAGE_SRC.metamask,
  },
  WalletConnect: {
    provider: walletconnect,
    description:
      "Connect to Trust Wallet, Metamask, Rainbow, Wallet and more...",
    icon: IMAGE_SRC.walletConnect,
  },
  Fortmatic: {
    provider: fortmatic,
    description: "Easy-to-use browser extension.",
    icon: IMAGE_SRC.fortmatic,
  },
};

const WalletConnectors = ({ closeModal }) => {
  const [activatingConnector, setActivatingConnector] = useState(null);
  const { connector, activate } = useWeb3React();

  return (
    <div className="copmonent-wallet-connectors">
      {Object.keys(connectorsByName).map((name, index) => {
        const currentConnector = connectorsByName[name].provider;
        const activating = currentConnector === activatingConnector;
        const shouldShow = !activatingConnector || activating;
        const connected = currentConnector === connector;
        const handleConnect = async () => {
          setActivatingConnector(currentConnector);
          await activate(connectorsByName[name].provider);
          setActivatingConnector(null);
          closeModal();
        };
        
        if (!shouldShow) return <div></div>;
        if (shouldShow)
          return (
            <div key={index}>
              {activating && (
                <div className="flex items-center mb-4 border border-third p-2 rounded-xl">
                  <ClipLoader color={"#005b64"} size={18} />
                  <div className="ml-4 text-xl">Initializing...</div>
                </div>
              )}
              <button
                onClick={() => {
                  if (connected) {
                    closeModal();
                  }
                  handleConnect();
                }}
                className="flex justify-between items-center bg-primary border border-third hover:border-fifth transition w-full py-3 px-4 mt-4 rounded-lg"
              >
                <div className="text-left">
                  <div className="flex items-center">{name}</div>
                  {activating && (
                    <div>{connectorsByName[name].description}</div>
                  )}
                </div>
                <img src={connectorsByName[name].icon} width="24" alt="icon" />
              </button>
            </div>
          );
      })}
    </div>
  );
};

export default WalletConnectors;

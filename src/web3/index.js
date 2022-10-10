import { InjectedConnector } from "@web3-react/injected-connector";

const injected = new InjectedConnector({ supportedChainIds: [] });

const humanReadableAccount = (_account) => {
  return _account.slice(0, 6) + "..." + _account.slice(_account.length - 4);
};

const jsNumberForAddress = (address) => {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);
  return seed;
};

export { injected, humanReadableAccount, jsNumberForAddress };

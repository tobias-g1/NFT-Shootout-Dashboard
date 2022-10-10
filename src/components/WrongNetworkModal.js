import ModalContainer from "./ModalContainer";

const WrongNetworkModal = ({
  wrongNetworkModalStatus,
  setWrongNetworkModalStatus,
}) => {
  const switchNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x61" }],
    });
    setWrongNetworkModalStatus(false);
  };

  return (
    <ModalContainer
      modalStatus={wrongNetworkModalStatus}
      setModalStatus={setWrongNetworkModalStatus}
    >
      <div className="flex flex-col">
        <div className="text-2xl">Wrong Network</div>
        <div className="text-red mt-4">Please connect to Correct Network</div>
        <button
          onClick={() => switchNetwork()}
          className="mt-6 rounded-xl px-4 py-2 bg-fifth"
        >
          Switch
        </button>
      </div>
    </ModalContainer>
  );
};

export default WrongNetworkModal;

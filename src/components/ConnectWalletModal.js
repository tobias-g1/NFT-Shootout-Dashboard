import ModalContainer from "./ModalContainer";
import WalletConnectors from "./WalletConnectors";

const ConnectWalletModal = ({
  connectWalletModalStatus,
  setConnectWalletModalStatus,
}) => {
  return (
    <ModalContainer
      modalStatus={connectWalletModalStatus}
      setModalStatus={setConnectWalletModalStatus}
    >
      <div>
        <div className="text-2xl mb-6">Connect to a wallet</div>
        <WalletConnectors
          closeModal={() => setConnectWalletModalStatus(false)}
        />
      </div>
    </ModalContainer>
  );
};

export default ConnectWalletModal;

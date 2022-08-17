import ModalContainer from "./ModalContainer";
import { ClipLoader } from "react-spinners";
import { SUCCESS, FAILED, LOADING } from "utility/statusVariable";

const TransactionModal = ({
  transactionPendingStatus,
  setTransactionPendingStatus,
}) => {
  const { transactionStatus, transactionModalStatus, transactionMessage } =
    transactionPendingStatus;
  const setTransactionModalStatus = (value) => {
    setTransactionPendingStatus((state) => ({
      ...state,
      transactionModalStatus: value,
    }));
  };

  return (
    <ModalContainer
      modalStatus={transactionModalStatus}
      setModalStatus={setTransactionModalStatus}
    >
      <div className="progress-modal">
        {transactionStatus !== LOADING && (
          <div className="text-2xl">Confirmation</div>
        )}
        {transactionStatus === LOADING && (
          <div className="text-2xl">Transaction pending</div>
        )}
        {transactionStatus === LOADING && (
          <div className="text-center">
            <div className="my-6">
              <ClipLoader color={"#005b64"} size={80} />
            </div>
            <div className="waiting-text">Waiting For Confirmation</div>
            <div className="pending-text">Transaction is pending.</div>
            <div className="confirm-text">
              Confirm this transaction in your wallet
            </div>
          </div>
        )}
        {transactionStatus === FAILED && (
          <div>
            <hr className="error-line" />
            <div className="my-4">Transaction failed!:</div>
            <div>{transactionMessage}</div>
          </div>
        )}

        {transactionStatus === SUCCESS && (
          <div className="my-4">Transaction Success</div>
        )}
      </div>
    </ModalContainer>
  );
};

export default TransactionModal;

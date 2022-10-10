import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import "react-datepicker/dist/react-datepicker.css";

import MetamaskProvider from "./components/MetamaskProvider";
import HomePage from "page/Home/Home";
import DashboardRouter from "routes/DashbaordRouter";

const App = () => {
  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard/*" element={<DashboardRouter />}></Route>
            </Routes>
          </Router>
        </MetamaskProvider>
      </Web3ReactProvider>
    </div>
  );
};

export default App;

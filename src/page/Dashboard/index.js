import {Button, Graph, InfoBadge, Table} from "components";
import { graphData, tableData } from "../../config/data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScholarsPage from "page/Scholars";

const DashboardPage = () => {
  return (
    <div className="px-6 py-16">
      <div className="flex justify-between xs:flex-row flex-col mb-6">
        <div className="text-2xl text-primary xs:mb-0 mb-4">Dashboard</div>
        <div className="flex xxs:flex-row flex-col items-center">
          <div className="flex items-center">
            <div className="font-bold text-lg text-primary mr-1">
              Total Shoo Balance:
            </div>
            <div className="text-secondary font-bold">+1,784,873,872</div>
          </div>
          <Button className="ml-2">Cashout</Button>
        </div>
      </div>
      <div className="grid  xs:grid-cols-2 md:grid-cols-4 grid-cols-1 mb-10 text-primary">
        <div className="flex items-center mb-4">
          <div className="font-bold mr-1">Total Stadium</div>
          <InfoBadge value="1" />
        </div>
        <div className="flex items-center mb-4">
          <div className="font-bold mr-1">Total Scholars</div>
          <InfoBadge value="1,000" />
        </div>
        <div className="flex items-center mb-4">
          <div className="font-bold mr-1">Staked Shoo</div>
          <InfoBadge value="1,000,000,000,000" />
        </div>
        <div className="flex items-center mb-4">
          <div className="font-bold mr-1 text-primary">Income in the last </div>
          <select className="select py-2 border outline-none border focus:border-info rounded">
            <option>24h</option>
            <option>1 week</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-5 mb-10">
        {graphData.map((data, index) => (
          <Graph data={data} key={index} />
        ))}
      </div>

      {/* table */}

      <div className="bg-light py-16 px-2 rounded">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default DashboardPage;

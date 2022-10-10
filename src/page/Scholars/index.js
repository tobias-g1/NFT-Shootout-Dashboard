import {Button, Container, Graph, ScholarRadialChart, ScholarMonthlyIncomChart} from "components";
import { scholarRadialChartData, scholarGraphData } from "../../config/data";

const ScholarsPage = () => {
  return (
    <Container>
      <div className="flex justify-between xs:flex-row flex-col mb-6">
        <div className="text-2xl text-primary xs:mb-0 mb-4">Scholars</div>
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

      <div className="flex justify-end items-center mb-4">
        <div className="font-bold mr-1 text-primary">Income in the last </div>
        <select className=" selectpy-2 border outline-none border focus:border-info rounded">
          <option>24h</option>
          <option>1 week</option>
        </select>
      </div>

      <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-5 mb-10">
        {scholarGraphData.map((data, index) => (
          <Graph data={data} key={index} />
        ))}
      </div>
      <div className="bg-light p-4">
        <ScholarMonthlyIncomChart />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-light px-4 py-4 gap-10">
        {scholarRadialChartData.map((data, index) => (
          <ScholarRadialChart data={data} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ScholarsPage;

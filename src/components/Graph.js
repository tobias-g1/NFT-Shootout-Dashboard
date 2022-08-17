import {Button} from "components";
import LineChart from "./LineChart";

export const Graph = ({ data }) => {
  const { title, amount, unit, graphValue } = data;
  const graphData = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: graphValue,
        fill: false,
        backgroundColor: "#1C75BB",
        borderColor: "#1C75BB",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="px-4 py-4 rounded border">
      <div className="text-muted text-sm">{title}</div>

      <div className="grid grid-cols-2 items-center">
        <div className="text-primary text-xl font-marcellus">{amount}</div>
        {graphValue.length !== 0 ? (
          <div className="h-20">
            <LineChart graphData={graphData} />
          </div>
        ) : (
          <Button type="secondary">Buy More Cards</Button>
        )}
      </div>

      <div>
        <span
          className={`rounded px-2 py-1 text-sm ${
            data.deviation > 0
              ? "bg-softSuccess text-success"
              : "bg-softDanger text-danger"
          }`}
        >
          {`${data.deviation > 0 ? `+${unit || ""}` : `-${unit || ""}`} ${
            data.deviation > 0 ? data.deviation : -data.deviation
          }`}
        </span>
        <span className="text-muted text-sm ml-2">Since last week</span>
      </div>
    </div>
  );
};

import Chart from "react-apexcharts";

export const CitiationFlowChart = () => {
  const chartData = {
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "65%",
          },
          dataLabels: {
            name: {
              show: true,
              offsetY: 65,
              color: "#74788d",
              fontWeight: "400",
              fontSize: "14px",
            },
            value: {
              offsetY: -8,
              fontSize: "24px",
              show: true,
              formatter: function (val) {
                return val * 20;
              },
            },
          },
        },
      },
      colors: ["#CA9DC7"],
      labels: ["Citation Flow"],
    },
    series: [61.7],
  };
  return (
    <div className="rounded border bg-white flex items-center justify-center">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
      />
    </div>
  );
};
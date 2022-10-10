import Chart from "react-apexcharts";

export const ReportAuditScoreChart = () => {
  const chartData = {
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "30px",
              fontWeight: "700",
              show: true,
            },
          },
        },
      },
      labels: ["Audit Score"],
    },
    series: [66],
  };
  return (
    <div className="px-4 py-4 rounded border bg-white flex items-center justify-center">
      <Chart
        options={chartData.options}
        series={chartData.series}
        width="400px"
        type="radialBar"
      />
    </div>
  );
};
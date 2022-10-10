import Chart from "react-apexcharts";

export const ScholarRadialChart = ({ data }) => {
  const chartData = {
    options: {
      chart: {
        id: "scholar",
      },
      colors: [data.color[0]],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
    },
    series: [data.value],
  };
  return (
    <div className="px-4 py-4 rounded border bg-white">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
      />

      <div className="text-primary text-center py-4 mt-3">
        Monthly Income Summary
      </div>
    </div>
  );
};
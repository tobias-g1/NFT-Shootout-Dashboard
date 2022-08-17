import Chart from "react-apexcharts";

export const GoogleRankingChart = () => {
  const settings = {
    series: [
      {
        name: "1-3",
        data: [2, 4, 5, 3, 6, 1, 5, 3, 6, 7, 3, 4],
      },
      {
        name: "4-10",
        data: [4, 3, 6, 8, 13, 2, 5, 3, 5, 2, 5, 6],
      },
      {
        name: "11-20",
        data: [14, 15, 19, 18, 15, 20, 12, 13, 16, 17, 11, 12],
      },
      {
        name: "20-50",
        data: [21, 22, 44, 34, 22, 49, 42, 36, 39, 42, 43, 50],
      },
      {
        name: "50+",
        data: [89, 77, 56, 78, 64, 98, 90, 52, 74, 80, 90, 100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2022 GMT",
          "02/01/2022 GMT",
          "03/01/2022 GMT",
          "04/01/2022 GMT",
          "05/01/2022 GMT",
          "06/01/2022 GMT",
          "07/01/2022 GMT",
          "08/01/2022 GMT",
          "09/01/2022 GMT",
          "10/01/2022 GMT",
          "11/01/2022 GMT",
          "12/01/2022 GMT",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div className="p-4 border">
      <div className="text-center text-xl">Google Rankings</div>
      <Chart
        options={settings.options}
        series={settings.series}
        height="400"
        type="bar"
      />
    </div>
  );
};
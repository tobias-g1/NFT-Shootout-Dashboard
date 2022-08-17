import Chart from "react-apexcharts";

export const ReportSessionChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "top",
      },

      labels: [
        "Referral",
        "Organic Search",
        "Direct",
        "Other",
        "Paid Search",
        "Social",
        "Display",
        "Email",
      ],

      dataLabels: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Sessions",
                // formatter: () => "Sessions 2,787",
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    series: [602, 573, 564, 410, 212, 178, 126, 122],
  };
  return (
    <div className="px-4 py-4 rounded border bg-white flex items-center justify-center">
      <Chart
        options={chartData.options}
        series={chartData.series}
        width="400px"
        type="donut"
      />
    </div>
  );
};
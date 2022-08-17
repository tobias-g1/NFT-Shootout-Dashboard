import React from "react";
import Chart from "react-apexcharts";

export const ScholarMonthlyIncomChart = () => {
  const data = {
    options: {
      chart: {
        id: "scholar_income",
        height: "100px",
      },
      xaxis: {
        categories: [
          "Jul-17",
          "Aug-17",
          "Sep-17",
          "Oct-17",
          "Nov-17",
          "Dec-17",
          "Jan-18",
          "Feb-18",
          "Mar-18",
          "Apr-18",
          "May-18",
          "June-18",
          "July-18",
        ],
      },
      colors: ["#2AB57D"],
      stroke: {
        show: true,
        lineCap: 'butt',
        width: 1.5,
        dashArray: 0,      
      },
    },
    series: [
      {
        name: "income",
        data: [20, 30, 40, 60, 65, 70, 75, 40, 45, 40, 45, 50, 53],
      },
    ],
  };

  return (
    <div className="px-4 py-4 rounded border bg-white">
      <div className="text-primary border-b py-4 mb-10">
        Monthly Income Summary
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height="400"
      />
    </div>
  );
};
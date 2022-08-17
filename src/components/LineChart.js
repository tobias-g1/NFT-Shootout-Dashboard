import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables, {
  id: "dashboard_chart",
  afterDraw: function (chart, easing) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 7]);
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#C1C1C1";
      ctx.stroke();
      ctx.restore();
    }
  },
});

const options = {
  interaction: {
    intersect: false,
    mode: "index",
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      displayColors: false,

      yAlign: "top",

      callbacks: {
        labelTextColor: function (context) {
          return "black";
        },
      },
      borderColor: "#E0DFDF",
      backgroundColor: "#ffffff",
      borderWidth: 1,
    },
  },

  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const LineChart = ({ graphData }) => {
  return <Line data={graphData} options={options} />;
};

export default LineChart;

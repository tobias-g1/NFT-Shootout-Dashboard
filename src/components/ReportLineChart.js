import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";


export const ReportLineChart = ({ data }) => {
  const { subtitle, value, deviation, graphValue } = data;
  const settings =  {
    options: {
      responsive: [{
        breakpoint: 780,
        options: {
          grid:{
            width:'400px'
          }
        },
    }],

      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            },
        },   
        yaxis: {
            lines: {
                show: false,
            }
        },  
        row: {
            colors: undefined,
            opacity: 0.5
        },  
        column: {
            colors: undefined,
            opacity: 0.5
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
      },
    
      chart: {
        offsetY: -38,
        offsetX: -15,
        id: "basic-bar",
        toolbar: {
          show: false
        },
      },

      xaxis: {
        axisBorder: {
          show: false,
        },
        tooltip: {
          enabled: false
        },
        axisTicks: {
          show: false,        
        },
        categories: [],
        labels: {
          show: false,
        }       
    },
      yaxis: {          
        labels: {
          show: false,
        }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 1.5,
      dashArray: 0,      
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '12px',
      },
      onDatasetHover: {
          highlightDataSeries: false,
      },
      x: {
          show: false, 
      },
      y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => " ",
        },    
      },
      marker: {
          show: false,
      },     
      fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
      },
    }
    },
   
  
    series: [
      {
        name: "line",
        data: graphValue
      }
    ]
  };


  return (
    <div className="border p-4">
      <div className="flex items-start">
        <div
          className={`flex text-sm rounded p-1 ${
            deviation > 0
              ? "text-success bg-softSuccess"
              : "bg-softDanger text-danger"
          }`}
        >
          {deviation > 0 ? (
            <MdArrowDropUp size="20" />
          ) : (
            <MdArrowDropDown size="20" />
          )}
          {deviation > 0 ? deviation : -deviation}%
        </div>
        <div className="ml-6">
          <div className="text-2xl">{value}</div>
          <div className="text-xm mt-2">{subtitle}</div>
        </div>
      </div>
      <div className="p-2">
      <Chart
                               options={settings.options}
                               series={settings.series}
                               type="line"
                         
                  />
      </div>
    </div>
  );
};
// LineChart.js

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = () => {
  // Highcharts configuration options
  const options = {
    chart: {
      type: "column",
    },

    title: {
      text: "",
    },

    legend: {
      align: "right",
      verticalAlign: "left",
      layout: "horizontal",
    },

    xAxis: {
      categories: ["2019", "2020", "2021"],
      labels: {
        x: -10,
      },
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "",
      },
    },

    series: [
      {
        name: "Ava",
        data: [38, 51, 34],
      },
      {
        name: "Dina",
        data: [31, 26, 27],
      },
      {
        name: "Malin",
        data: [38, 42, 41],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "left",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            yAxis: {
              labels: {
                align: "left",
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
            subtitle: {
              text: null,
            },
            credits: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;

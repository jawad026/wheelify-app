// LineChart.js

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  // Sample data
  const data = [
    { category: "Category 1", value: 10 },
    { category: "Category 2", value: 20 },
    { category: "Category 3", value: 15 },
    { category: "Category 4", value: 25 },
  ];

  // Convert data to Highcharts series format
  const seriesData = data.map((item) => ({
    name: item.category,
    y: item.value,
  }));

  // Highcharts configuration options
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: data.map((item) => item.category),
      
    },
    yAxis: {
        labels: {
            style: {
              fontSize: '10px',
              outerHeight:"10px" // Adjust font size of y-axis labels
            },
          },
      },
    series: [
      {
        data: seriesData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;

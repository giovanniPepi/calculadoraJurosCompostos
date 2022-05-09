import { Chart } from "chart.js";

const getResultChart = () => {
  const resultChart = document.createElement('canvas');
  resultChart.setAttribute('id', 'resultChart');

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  //appends
  const resultContainer = document.querySelector('.resultContainer');
  resultContainer.appendChild(resultChart);
};

export default getResultChart;
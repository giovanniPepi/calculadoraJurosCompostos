// imports from chart.js
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const getResultChart = (result1) => {

  console.log(result1);
  console.log(Object.keys(result1[0]));

  const chartDiv = document.createElement('div')
  chartDiv.setAttribute('class', 'chartDiv');

  const resultChart = document.createElement('canvas');
  resultChart.setAttribute('id', 'resultChart');
  resultChart.setAttribute('width', 400);
  resultChart.setAttribute('height', 400);

  //appends
  const resultContainer = document.querySelector('.resultContainer');
  chartDiv.appendChild(resultChart);
  resultContainer.appendChild(chartDiv);

  //chart generation
  const ctx = resultChart;
  const myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: Object.keys(result1[0]),
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
};

export default getResultChart;
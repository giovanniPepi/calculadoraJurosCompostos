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

  //get labels from obj
  const resultData = Object.keys(result1[0]);

  //store each data point as an array inside an array
  let dataItems = [];

  //acess key values for each obj inside array
  const getData = (() => {
    for(let obj of result1) {

      let keys = Object.keys(obj);
      
      let ano = "Ano";
      let total = "Total R$";
      let juros = "Juros R$";

      //store data from each year as an array
      let dataItem = []
      
      dataItem.push(obj[ano]);
      dataItem.push(obj[total]);
      dataItem.push(obj[juros]);
      dataItems.push(dataItem);

    }
  })();

  //DOM manip
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

  //spaghetti to acess the data...
  let xData = dataItems;
  console.log(xData);

  //generate index to labels
  let indexArray = []; 
  xData.forEach((item, i) => {
    indexArray.push(i);
  });

  //chart generation
  const ctx = resultChart;
  const myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: indexArray,
        datasets: [{
            label: 'money',
            data: xData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(74, 162, 215, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(74, 162, 215, 0.2)',
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
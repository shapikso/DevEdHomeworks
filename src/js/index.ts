

// @ts-ignore
import Chart from "chart.js/auto";
import axios from "../../node_modules/axios/index";
import "../styles.css";

require("babel-core/register");
require("babel-polyfill");
const data = {
"2020-12": 35723.22,
"2021-01": 36488.87,
"2021-02": 37167.88,
"2021-03": 36448.69,
"2021-04": 35734.86,
"2021-05": 34581.4,
"2021-06": 34261.39,
"2021-07": 35737.91,
"2021-08": 36203.59,
"2021-09": 33339.77,
"2021-10": 33605.96,
"2021-11": 34037.02
}

const ctx = <CanvasRenderingContext2D>(<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');
const showChart = (mounth) => {

    //myChart.destroy();
    ctx.clearRect(0, 0, 400, 400);
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(mounth),
            datasets: [{
                label: '# of Votes',
                data: Object.values(mounth),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
    console.log(myChart);
   // myChart.destroy();
}


const getJobData = async () => {
    const country = (<HTMLSelectElement>document.querySelector('.country')).value
    const type = (<HTMLSelectElement>document.querySelector('.type')).value

    const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/${country}/history`,
        { params: { app_id: '91f2ffdf', app_key: 'df22e92c49631fc7a02f50e0e68f2815',category: type},
            headers: {"content-type": "application/json"}})


     //await axios.get(`https://api.adzuna.com/v1/api/jobs/${country}/history?app_id=91f2ffdf&app_key=df22e92c49631fc7a02f50e0e68f2815&category=${type}`)
    showChart(res.data.month)

}
//headers: {"Access-Control-Allow-Origin": "*"}

const showDoughnut = <HTMLElement>document.querySelector('.submite')

showDoughnut.addEventListener('click', getJobData)


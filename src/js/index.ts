

import axios from "../../node_modules/axios/index";
import "../styles.css";
import { myChart } from "./constants";

require("babel-core/register");
require("babel-polyfill");

const showChart = (mounth) : void => {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
    });
    Object.values(mounth).forEach(element => {
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.push(element);
        });
    })  
    myChart.update();
}

const getJobData = async () : Promise<void> => {
    const country = (<HTMLSelectElement>document.querySelector('.country')).value
    const type = (<HTMLSelectElement>document.querySelector('.type')).value

    const res = await axios.get(`http://localhost:5000/jobs-history`,
        { params: {country: country, type: type},
            headers: {"content-type": "application/json"}})
    console.log(res);
    console.log(res.data);
    showChart(res.data)

}

const showBar = <HTMLElement>document.querySelector('.submite')
showBar.addEventListener('click', getJobData)


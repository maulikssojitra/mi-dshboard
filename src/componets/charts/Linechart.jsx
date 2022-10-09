import React, { Fragment } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        y: {
            grid: {
                drawBorder: false,
                borderDashOffset: 10,
                borderDash: [5],
                color: 'rgba(255, 255, 255, 0.336)',
                tickColor: 'transparent'
            },
            ticks: {
                color: '#fff',
                stepSize: 200
            },
            beginAtZero: true
        },
        x: {
            grid: {
                borderDashOffset: 4.2,
                borderDash: [5],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0)',
                tickColor: 'transparent',
            },
            ticks: {
                color: '#fff',
            },
            beginAtZero: true
        },
        
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
            borderColor: '#fff',
            backgroundColor: '#fff',
        },
    ],
};

const Linechart = () => {
    return (
        <Fragment>
            <Line options={options} data={data} />
        </Fragment>
    )
}

export default Linechart

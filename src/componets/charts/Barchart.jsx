import React, { Fragment } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
                stepSize: 20
            },
            beginAtZero: true
        },
        x: {
            grid: {
                borderDashOffset: 4.2,
                borderDash: [5],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.336)',
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
            text: 'Chart.js Bar Chart',
        },
    },
};


const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: '#fff',
            borderRadius: 7,
            barThickness: 5,
        },
    ],
};


const Barchart = () => {
    return (
        <Fragment>
            <Bar
                options={options} data={data}
            />
        </Fragment>
    )
}

export default Barchart

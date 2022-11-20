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
    aspectRatio: 3,
    indexAxis: 'y',
    responsive: true,
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
            text: 'Chart.js Bar Chart',
        },
    },
};


const labels = ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
            backgroundColor: '#344767',
            borderRadius: 7,
            barThickness: 30,
        },
    ],
};

const HorizontalChart = () => {
    return (
        <Fragment>
            
            <Bar
                options={options} 
                data={data}
            />

        </Fragment>
    )
}

export default HorizontalChart

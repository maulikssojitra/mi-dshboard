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
    // maintainAspectRatio: false,
    color: '#fff',
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
                color: 'rgba(255, 255, 255, 0.164)',
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
                color: 'rgba(255, 255, 255, 0.164)',
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
            position: 'top',
        },
        title: {
            display: false,
        },
    },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Facebook Ads',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 700 })),
            borderColor: '#1A73E8',
            backgroundColor: '#1A73E8',
            borderWidth: '5'
        },
        {
            label: 'Google Ads',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 700 })),
            borderColor: '#344867',
            backgroundColor: '#344867',
            borderWidth: '5'
        },
    ],
};

const LinechartSeles = () => {
    return (
        <Fragment>
            <Line options={options} data={data} />
        </Fragment>
    )
}

export default LinechartSeles

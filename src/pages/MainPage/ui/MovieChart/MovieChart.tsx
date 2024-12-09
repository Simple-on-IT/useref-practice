import React, { useEffect, useRef } from 'react';
import Chart, { ChartOptions } from 'chart.js/auto';
import './ModernBarChart.css';
import { initialMovieData } from './model/constants/chartConstants';

const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#FFF',
      titleColor: '#333',
      bodyColor: '#666',
      borderColor: '#CCC',
      borderWidth: 1,
      cornerRadius: 8,
    },
    title: {
      display: true,
      text: 'Рейтинги новогодних фильмов',
      font: {
        size: 24,
        weight: 'bold',
        family: 'Inter, sans-serif',
      },
      color: '#333',
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        color: '#666',
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        color: '#666',
        stepSize: 1,
      },
      grid: {
        color: '#E6E6E6',
      },
    },
  },
};

export const HolidayMovieRatingsChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  // chartInstanceRef

  useEffect(() => {
    if (chartRef.current) {
      // chartInstanceRef.current = new Chart(...);
    }

    return () => {
      // if (chartInstanceRef.current) {
      //   chartInstanceRef.current.destroy();
      // }
    };
  }, []);

  return (
    <div className="modern-chart-container">
      {/* Прикрепите ref */}
      <canvas></canvas>
    </div>
  );
};

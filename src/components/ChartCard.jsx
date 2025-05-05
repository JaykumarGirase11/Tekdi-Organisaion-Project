import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const chartColors = {
  primary: {
    light: 'rgba(14, 165, 233, 0.2)',
    dark: 'rgb(14, 165, 233)',
  },
  secondary: {
    light: 'rgba(34, 197, 94, 0.2)',
    dark: 'rgb(34, 197, 94)',
  },
  accent: {
    light: 'rgba(245, 158, 11, 0.2)',
    dark: 'rgb(245, 158, 11)',
  },
  danger: {
    light: 'rgba(239, 68, 68, 0.2)',
    dark: 'rgb(239, 68, 68)',
  },
};

function ChartCard({ title, type, data, className }) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#e2e8f0' : '#2d3748';

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor,
          font: {
            family: 'Inter var',
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          family: 'Inter var',
          size: 16,
          weight: '600',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: type === 'bar' ? {
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: textColor,
        },
      },
      y: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: textColor,
        },
      },
    } : undefined,
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <Bar
            options={chartOptions}
            data={{
              labels: data.labels,
              datasets: [
                {
                  label: 'Submissions',
                  data: data.values,
                  backgroundColor: chartColors.primary.light,
                  borderColor: chartColors.primary.dark,
                  borderWidth: 2,
                  borderRadius: 4,
                },
              ],
            }}
          />
        );
      case 'pie':
        return (
          <Pie
            options={chartOptions}
            data={{
              labels: data.labels,
              datasets: [
                {
                  data: data.values,
                  backgroundColor: [
                    chartColors.primary.light,
                    chartColors.secondary.light,
                    chartColors.accent.light,
                    chartColors.danger.light,
                  ],
                  borderColor: [
                    chartColors.primary.dark,
                    chartColors.secondary.dark,
                    chartColors.accent.dark,
                    chartColors.danger.dark,
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <div className="h-80">{renderChart()}</div>
    </div>
  );
}

export default ChartCard; 
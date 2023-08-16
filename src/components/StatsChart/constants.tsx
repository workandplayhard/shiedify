import { ChartOptions } from 'chart.js'

export const lineChartOpts: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 500,
      },
      grid: {
        display: false,
        lineWidth: 0,
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        lineWidth: 0,
      },
      border: {
        display: false,
      },
    },
  },
}

export const pieChartOpts: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
}

export const doughnutChartOpts: ChartOptions<'doughnut'> = {
  cutout: 70,
}

import React from 'react'
import classNames from 'classnames'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

import { ArgumentType } from '@/types'
import LineChart from './lineChart'
import PieChart from './pieChart'
import DoughnutChart from './doughnutChart'
import { IStatsChartProps } from './types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
)

export const StatsChart = <T extends ArgumentType = number>({
  title,
  header,
  type,
  data,
  opts,
  clue,
  className,
}: IStatsChartProps<T>) => {
  return (
    <div className={classNames('stats-chart', className)}>
      <div className="title-box">
        <h3>{title}</h3>
      </div>
      {header}
      <div className="chart-item">
        {type === 'line' && <LineChart<T> opts={opts?.line} data={data.line} />}
        {type === 'pie' && <PieChart<T> opts={opts?.pie} data={data.pie} />}
        {type === 'doughnut' && (
          <DoughnutChart<T> opts={opts?.doughnut} data={data.doughnut} />
        )}
      </div>
      {!!clue && (
        <div className="chart-clue">
          <p>{clue}</p>
        </div>
      )}
    </div>
  )
}

export default React.memo(StatsChart)

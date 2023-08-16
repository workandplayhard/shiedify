import type { Meta, StoryObj } from '@storybook/react'

import { IStatsChartProps } from './types'
import { StatsChart } from '.'
import { header1, header2, chartData } from './storyData'

const meta = {
  title: 'Component/StatsChart',
  component: StatsChart,
  tags: ['autodocs'],
  argTypes: {
    title: { defaultValue: 'Total incoming alerts', control: { type: 'text' } },
    className: { defaultValue: 'w-50', control: { type: 'text' } },
    clue: { control: { type: 'text' } },
    type: {
      defaultValue: 'line',
      options: ['line', 'pie', 'doughnut'],
      control: { type: 'select' },
    },
    header: { control: { type: 'element' } },
  },
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<IStatsChartProps>

export const Primary: Story = {
  args: {
    type: 'line',
  },
  render: ({ type, ...rest }: IStatsChartProps<number>) => {
    return (
      <div className="chart-content">
        <div className="column">
          <div className="chart-box w-100">
            <StatsChart<number>
              {...rest}
              type={type}
              data={{ [type]: chartData[type] }}
              header={header1}
            />
          </div>
        </div>
      </div>
    )
  },
}

export const Examples = {
  render: () => {
    return (
      <div className="chart-content w-100">
        <div className="column w-69">
          <div className="chart-box w-50">
            <StatsChart<number>
              className=""
              title="Total incoming alerts"
              header={header1}
              type="line"
              data={chartData}
            />
          </div>
          <div className="chart-box w-50">
            <StatsChart<number>
              className=""
              title="No. of Chargebacks Resolved"
              header={header2}
              type="line"
              data={chartData}
              opts={{ line: { elements: { point: { radius: 0 } } } }}
            />
          </div>
          <div className="chart-box w-50">
            <StatsChart<number>
              className="info-chart"
              title="Business descriptor Alert distribution"
              header={header2}
              type="pie"
              clue="Hover to get the data"
              data={chartData}
            />
          </div>
          <div className="chart-box w-50">
            <StatsChart<number> className="" type="doughnut" data={chartData} />
          </div>
        </div>
      </div>
    )
  },
}

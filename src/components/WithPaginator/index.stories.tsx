import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { IWithPaginatorProps } from './types'
import { WithPaginator } from '.'
import moment from 'moment'
import { t } from '@/i18n'

interface IDatum {
  id: number
  title: string
  amount: number
  date: string
}

const meta = {
  title: 'Component/WithPaginator',
  component: WithPaginator,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: 'array', min: 1 },
    },
    initialPage: {
      control: { type: 'number', min: 1 },
    },
    initialPageSize: { control: { type: 'number' } },
    loading: {
      options: [true, false, undefined],
      defaultValue: undefined,
      control: { type: 'select' },
    },
    renderOnOnePageCount: {
      options: [true, false, undefined],
      defaultValue: undefined,
      control: { type: 'select' },
    },
    siblingCount: {
      control: { type: 'number' },
    },
    totalItems: {
      control: { type: 'number' },
    },
  },
  args: {
    data: [],
    totalItems: 100,
  },
} satisfies Meta<typeof WithPaginator>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  // @ts-ignore
  render: (props: IWithPaginatorProps<IDatum>) => {
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => setLoading(!!props.loading), [props.loading])

    const data: IDatum[] = useMemo(
      () =>
        Array.from({ length: props.totalItems }, (_, idx) => idx + 1).map(
          i => ({
            id: 10000 + i,
            title: `Hayman Construction Inc#${i}`,
            amount: Math.floor(100 * (Math.random() * 101 + 100)) / 100,
            date: moment().format('ll'),
          }),
        ),
      [props.totalItems],
    )

    const onPageMetaChange = useCallback((_page: number, _size: number) => {
      console.log({ _page, _size })
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2500)
    }, [])

    return (
      <WithPaginator<IDatum>
        {...props}
        data={data}
        loading={loading}
        onPageMetaChange={onPageMetaChange}
      >
        {pagedData => (
          <div className="surface-wrap">
            <div className="surface-data">
              <div className="data-content">
                <div className="data-table">
                  <table>
                    <thead>
                      <tr>
                        <td style={{ minWidth: 65 }}>
                          <label>
                            <input type="checkbox" />
                            <span className="ic-check" />
                          </label>
                        </td>
                        <td>Descriptor</td>
                        <td style={{ minWidth: 152 }}>Alert ID</td>
                        <td style={{ minWidth: 160 }}>Amount</td>
                        <td style={{ minWidth: 176 }}>Txn. date</td>
                      </tr>
                    </thead>
                    <tbody>
                      {pagedData.map(datum => (
                        <tr key={datum.id}>
                          <td>
                            <label>
                              <input type="checkbox" />
                              <span className="ic-check" />
                            </label>
                          </td>
                          <td>{datum.title}</td>
                          <td>{datum.id}</td>
                          <td>
                            {t('currency', {
                              value: datum.amount,
                              currency: 'USD',
                            })}
                          </td>
                          <td>{datum.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </WithPaginator>
    )
  },
}

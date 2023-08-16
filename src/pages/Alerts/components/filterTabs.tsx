import React from 'react'

import { Tabs } from '@/components/Tabs'
import { ITab } from '@/types'
import { t } from '@/i18n'
import { useAlerts } from '@/hooks'

import { AlertStatus } from '@/apollo/graphql/types'

const constants = [
  { key: AlertStatus.Pd, label: 'pending' },
  { key: AlertStatus.Rs, label: 'resolved' },
  { key: AlertStatus.Ex, label: 'expired' },
]

const FilterTabs: React.FC = () => {
  const { activeStatus, onChangeFilter } = useAlerts()
  const tabs: ITab<string>[] = constants.map(item => ({
    key: item.key.toString(),
    label: t(item.label),
  }))

  return (
    <Tabs
      tabs={tabs}
      onChange={val => {
        onChangeFilter?.(val as AlertStatus)
      }}
      activeTab={activeStatus || 'PD'}
    />
  )
}

export default FilterTabs

import React from 'react'

import { AlertsContextProvider } from '@/contexts'
import { CustomerAppLayout } from '@/layout'

import FilterTabs from './components/filterTabs'

const Alerts: React.FC = () => {
  return (
    <CustomerAppLayout hasNav={false}>
      <AlertsContextProvider>
        <div className="surface-data">
          <FilterTabs />
        </div>
      </AlertsContextProvider>
    </CustomerAppLayout>
  )
}

export default Alerts

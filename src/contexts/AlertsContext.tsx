import React, { useState, useMemo, useCallback, useEffect } from 'react'

import { AlertStatus } from '@/apollo/graphql/types'

interface IAlertsContext {
  activeStatus?: AlertStatus
  alerts?: any
  onChangeFilter?: (_status: AlertStatus) => void
  onGetAlerts?: () => void
}

export const AlertsContext = React.createContext<IAlertsContext>({
  activeStatus: AlertStatus.Pd,
  onChangeFilter: () => null,
  onGetAlerts: () => null,
})

export const AlertsContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [activeStatus, setActiveStatus] = useState<AlertStatus>()

  const onChangeFilter = useCallback((_status: AlertStatus) => {
    setActiveStatus(_status)
  }, [])

  const values: IAlertsContext = useMemo(
    () => ({
      activeStatus,
      onChangeFilter,
    }),
    [activeStatus, onChangeFilter],
  )

  return (
    <AlertsContext.Provider value={values}>{children}</AlertsContext.Provider>
  )
}

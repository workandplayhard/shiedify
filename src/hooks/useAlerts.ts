import { useContext } from 'react'

import { AlertsContext } from '@/contexts'

export const useAlerts = () => useContext(AlertsContext)

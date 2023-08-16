import React from 'react'

import { Placement } from '@/types'

export interface IPopoverProps {
  className?: string
  open?: boolean
  button: React.ReactElement
  placement?: Placement
  positioning?: 'absolute' | 'fixed'
  closeOnOutside?: boolean
  distance?: number
  children: React.ReactNode
  onClose: () => void
}

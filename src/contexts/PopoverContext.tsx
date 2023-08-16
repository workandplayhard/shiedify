import React, { useMemo, useState } from 'react'

import { Rect, Placement } from '@/types'

const defaultRect = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
}

interface IPopoverContext {
  open: boolean
  onClose: () => void
  placement: Placement
  triggerRect: Rect
  closeOnOutside: boolean
  setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>
  distance: number
}

export const PopoverContext = React.createContext<IPopoverContext>({
  open: false,
  onClose: () => {
    throw new Error('PopoverContext setIsShow should be used under provider')
  },
  placement: 'bottom-center',
  closeOnOutside: true,
  triggerRect: defaultRect,
  setTriggerRect: () => {
    throw new Error(
      'PopoverContext setTriggerRect should be used under provider',
    )
  },
  distance: 12,
})

export const PopoverContextProvider: React.FC<{
  open?: boolean
  onClose: () => void
  placement?: Placement
  closeOnOutside?: boolean
  distance: number
  children: React.ReactNode
}> = ({
  open,
  onClose,
  children,
  placement = 'bottom-center',
  closeOnOutside,
  distance,
}) => {
  const [triggerRect, setTriggerRect] = useState(defaultRect)

  const values = useMemo(
    () => ({
      placement,
      open: !!open,
      onClose,
      triggerRect,
      setTriggerRect,
      closeOnOutside: !!closeOnOutside,
      distance,
    }),
    [placement, open, onClose, triggerRect, closeOnOutside, distance],
  )

  return (
    <PopoverContext.Provider value={values}>{children}</PopoverContext.Provider>
  )
}

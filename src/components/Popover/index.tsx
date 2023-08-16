import React from 'react'

import { PopoverContextProvider } from '@/contexts'

import Trigger from './trigger'
import Content from './content'
import { IPopoverProps } from './types'

export const Popover: React.FC<IPopoverProps> = ({
  className,
  open,
  button,
  placement,
  positioning = 'fixed',
  closeOnOutside = true,
  distance = 12,
  onClose,
  children,
}) => {
  return (
    <PopoverContextProvider
      open={open}
      closeOnOutside={closeOnOutside}
      onClose={onClose}
      placement={placement}
      distance={distance}
    >
      <Trigger>{button}</Trigger>
      <Content className={className} positioning={positioning}>
        {children}
      </Content>
    </PopoverContextProvider>
  )
}

import React, { useRef } from 'react'

import { usePopover } from '@/hooks'

interface Props {
  children: React.ReactElement
}

const Trigger: React.FC<Props> = ({ children }) => {
  const { setTriggerRect } = usePopover()

  const ref = useRef<HTMLElement>(null)

  const onClick = (_onClick?: () => void) => {
    const element = ref.current
    if (element == null) return

    const rect = element.getBoundingClientRect()
    setTriggerRect(rect)
    _onClick?.()
  }

  const childrenToTriggerPopover = React.cloneElement(children, {
    onClick: () => onClick(children.props.onClick),
    ref,
  })

  return childrenToTriggerPopover
}

export default Trigger

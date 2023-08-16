import React, { useLayoutEffect, useRef, useState } from 'react'

import {
  usePopover,
  useOnClickOutside,
  useFocusTrapping,
  useCombinedRefs,
} from '@/hooks'
import { getPopoverCoords } from './utils'
import classNames from 'classnames'

interface Props {
  className?: string
  positioning: 'absolute' | 'fixed'
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ className, positioning, children }) => {
  const { triggerRect, placement, closeOnOutside, distance, onClose } =
    usePopover()
  const ref = useRef<HTMLDialogElement>(null)

  const [coords, setCoords] = useState({
    left: 0,
    top: 0,
  })

  useLayoutEffect(() => {
    const element = ref.current
    if (element == null) return

    const rect = element.getBoundingClientRect()

    const coords = getPopoverCoords(
      triggerRect,
      rect,
      placement,
      distance,
      positioning,
    )
    setCoords(coords)
  }, [distance, placement, triggerRect, positioning])

  const refFocusTrapping = useFocusTrapping()
  const mergedRef = useCombinedRefs(ref, refFocusTrapping)
  useOnClickOutside(mergedRef, closeOnOutside, onClose)

  return (
    <div
      className={classNames('popover', className)}
      ref={mergedRef}
      style={{
        position: positioning,
        left: `${coords.left}px`,
        top: `${coords.top}px`,
        margin: 0,
        zIndex: 1999,
      }}
    >
      {children}
    </div>
  )
}

export default Content

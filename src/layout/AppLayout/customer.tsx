import React from 'react'

import { CustomerAppHeader } from '../AppHeader'
import { CustomerAppNav } from '../AppNav'

interface Props {
  hasHeader?: boolean
  hasNav?: boolean
  className?: string
  wrapClassName?: string
  children: React.ReactNode
}

export const CustomerAppLayout: React.FC<Props> = ({
  hasHeader = true,
  hasNav = true,
  className = 'surface-wrap',
  wrapClassName = 'surface-data',
  children,
}) => {
  return (
    <>
      {hasHeader && <CustomerAppHeader />}
      <div className={className}>
        {hasNav && <CustomerAppNav />}
        <div className={wrapClassName}>{children}</div>
      </div>
    </>
  )
}

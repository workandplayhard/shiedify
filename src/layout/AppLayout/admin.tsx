import React from 'react'

import { AdminAppHeader } from '../AppHeader'
import { AdminAppNav } from '../AppNav'

interface Props {
  hasHeader?: boolean
  hasNav?: boolean
  className?: string
  wrapClassName?: string
  children: React.ReactNode
}

export const AdminAppLayout: React.FC<Props> = ({
  hasHeader = true,
  hasNav = true,
  className = 'surface-wrap',
  wrapClassName = 'surface-data',
  children,
}) => {
  return (
    <>
      {hasHeader && <AdminAppHeader />}
      <div className={className}>
        {hasNav && <AdminAppNav />}
        <div className={wrapClassName}>{children}</div>
      </div>
    </>
  )
}

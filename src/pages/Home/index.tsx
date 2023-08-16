import React from 'react'

import { useAuth, useApp } from '@/hooks'
import { CustomerAppLayout } from '@/layout'

const HomePage: React.FC = () => {
  const { onSignOut } = useAuth()
  const { language, onChangeLanguage } = useApp()

  return (
    <CustomerAppLayout>
      <div className="surface-toolbar">
        <div className="tabs-menu">
          <ul>
            <li className="active">
              <a href="javascript:void(0)">Pending</a>
            </li>
            <li>
              <a href="javascript:void(0)">Resolved</a>
            </li>
            <li>
              <a href="javascript:void(0)">Expired</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="javascript:void(0)">Starred</a>
            </li>
          </ul>
        </div>

        <div className="data-options">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <span className="ic-filters"></span>Edit Columns
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <span className="ic-download"></span>Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </CustomerAppLayout>
  )
}

export default HomePage

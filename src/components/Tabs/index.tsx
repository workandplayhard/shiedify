import React from 'react'
import classNames from 'classnames'

import { ITabsProps } from './types'

export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  className,
  onChange,
  activeTab,
}) => {
  return (
    <div
      className={classNames('tabs-menu', {
        [className || '']: !!className,
      })}
    >
      <ul>
        {tabs.map(({ key, label }, idx) => (
          <li
            key={idx.toString()}
            onClick={() => onChange(key)}
            className={classNames('tab-item', {
              active: activeTab === key,
            })}
          >
            <a onClick={() => undefined}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

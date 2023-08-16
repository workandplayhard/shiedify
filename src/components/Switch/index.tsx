import React from 'react'

import { ISwitchProps } from './types'

export const Switch: React.FC<ISwitchProps> = ({
  active,
  className,
  onChange,
}) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={active}
        onChange={() => onChange?.(!active)}
      />
      <span className="switcher" />
    </label>
  )
}

export default Switch

import { useMemo, useRef, useState } from 'react'
import classNames from 'classnames'

import { useOnClickOutside } from '@/hooks'
import { ArgumentType } from '@/types'

import { ISelectProps } from './types'

export const Select = <T extends ArgumentType>({
  value,
  options,
  disabled,
  onChange,
  className,
  placeholder,
  renderOption,
}: ISelectProps<T>) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)

  useOnClickOutside(divRef, true, () => setOpened(false))

  const label: string | undefined = useMemo(() => {
    if (value === null || value === undefined) return placeholder
    const selected = options.find(op => op.value === value)

    return selected?.label ?? placeholder
  }, [options, placeholder, value])

  return (
    <div
      ref={divRef}
      className={classNames(className, {
        open: opened,
        disabled: !!disabled,
      })}
      onClick={() => !disabled && setOpened(!opened)}
    >
      {!!label && (
        <div className="label">
          <p>{label}</p>
        </div>
      )}
      <div className="drop-item">
        <ul>
          {options.map((option, index) => (
            <li
              key={index.toString()}
              className={classNames({
                active: value === option.value,
              })}
              onClick={() => {
                onChange?.(option)
                setOpened(false)
              }}
            >
              {renderOption ? (
                renderOption(option, index)
              ) : (
                <div className="item-text">
                  <p>{option.label}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

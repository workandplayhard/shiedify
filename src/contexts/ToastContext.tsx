import React, { createContext, FC, useCallback, useMemo, useState } from 'react'
import generateId from 'uniqid'

import { IToast, IToastOption } from '@/components/Toast/types'
import { Toast } from '@/components'

export interface IAddToastParam extends Omit<IToast, 'id' | 'option'> {
  option?: IToastOption
}

interface IToastContext {
  addToast: (_params: IAddToastParam) => string | null
  removeToast: (_id?: string | null) => void
}

export const ToastContext = createContext<IToastContext>({
  addToast: () => null,
  removeToast: () => null,
})

export const ToastProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<IToast[]>([])

  const addToast = useCallback((params: IAddToastParam): string | null => {
    const id = generateId()
    setToasts(prev => [
      ...prev,
      {
        ...params,
        id,
        option: {
          autoHide: params?.option?.autoHide ?? true,
          autoHideTime: params?.option?.autoHideTime ?? 5000,
          hasCloseBtn: params?.option?.hasCloseBtn ?? true,
          MsgWrapEl: params?.option?.MsgWrapEl || React.Fragment,
        },
      },
    ])

    return id
  }, [])

  const removeToast = useCallback((_id?: string | null) => {
    if (_id) {
      setToasts(prev => prev.filter(e => e.id !== _id))
    } else {
      setToasts([])
    }
  }, [])

  const value = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast],
  )

  return (
    <ToastContext.Provider value={value}>
      <>
        {children}
        {toasts.length > 0 && (
          <div className="toast-container">
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                id={toast.id}
                message={toast.message}
                type={toast.type}
                icon={toast.icon}
                secondaryMessage={toast.secondaryMessage}
                actionButtons={toast.actionButtons}
                autoHide={toast.option.autoHide}
                autoHideTime={toast.option.autoHideTime}
                hasCloseBtn={toast.option.hasCloseBtn}
                MsgWrapEl={toast.option.MsgWrapEl}
              />
            ))}
          </div>
        )}
      </>
    </ToastContext.Provider>
  )
}

export default ToastProvider

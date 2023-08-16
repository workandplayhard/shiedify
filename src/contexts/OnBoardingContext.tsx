import React, { useCallback, useState, useMemo } from 'react'

import { OnBoardingStatus } from '@/pages/OnBoarding/types'

interface IOnBoardingContext {
  status: OnBoardingStatus
  manualDescriptors: string[]
  fileDescriptors: Record<string, string[]>
  fileLoading: boolean
  onAddManualDescriptor: (_descriptor: string) => void
  onAddFileDescriptor: (_uuid: string, _descriptor: string[]) => void
  onChangeStatus: (_value: OnBoardingStatus) => void
  onPreview: () => void
  onSetFileLoading: (_value: boolean) => void
}

export const OnBoardingContext = React.createContext<IOnBoardingContext>({
  status: 'initial',
  manualDescriptors: [],
  fileDescriptors: {},
  fileLoading: false,
  onAddManualDescriptor: () => null,
  onAddFileDescriptor: () => null,
  onChangeStatus: () => null,
  onPreview: () => null,
  onSetFileLoading: () => null,
})

export const OnBoardingContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [status, setStatus] = useState<OnBoardingStatus>('initial')
  const [manualDescriptors, setManualDescriptors] = useState<string[]>([])
  const [fileDescriptors, setFileDescriptors] = useState<
    Record<string, string[]>
  >({})
  const [fileLoading, setFileLoading] = useState<boolean>(false)

  const onChangeStatus = useCallback((_value: OnBoardingStatus) => {
    setStatus(_value)
  }, [])

  const onPreview = useCallback(() => {
    // TODO your logic
  }, [])

  const onAddManualDescriptor = useCallback((descriptor: string) => {
    setManualDescriptors(prev => [...prev, descriptor])
  }, [])

  const onAddFileDescriptor = useCallback(
    (uuid: string, descriptor: string[]) => {
      setFileDescriptors(prev => ({ ...prev, [uuid]: descriptor }))
    },
    [],
  )

  const values: IOnBoardingContext = useMemo(
    () => ({
      status,
      fileLoading,
      manualDescriptors,
      fileDescriptors,
      onSetFileLoading: setFileLoading,
      onAddManualDescriptor,
      onAddFileDescriptor,
      onChangeStatus,
      onPreview,
    }),
    [
      onAddFileDescriptor,
      onAddManualDescriptor,
      fileDescriptors,
      fileLoading,
      manualDescriptors,
      onChangeStatus,
      onPreview,
      status,
      setFileLoading,
    ],
  )

  return (
    <OnBoardingContext.Provider value={values}>
      {children}
    </OnBoardingContext.Provider>
  )
}

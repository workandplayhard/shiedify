import React, { useCallback, useEffect, useState, useMemo } from 'react'
import {
  useNavigate,
  useLocation,
  NavigateFunction,
  Location,
} from 'react-router-dom'

import {
  useTokenLoginMutation,
  useLoginMutation,
  useMeLazyQuery,
} from '@/apollo/graphql'
import { Maybe, MeType } from '@/apollo/graphql/types'
import {
  homePath,
  getStorageValue,
  setStorageValue,
  removeStorageValue,
  signInPath,
  publicPath,
} from '@/utils'
import { ISignInPayload } from '@/types'
import { AUTH_TOKEN_KEY } from '@/constants'

interface IAuthContext {
  authenticated: boolean
  signingIn: boolean
  error: 'invalid' | 'notFound' | undefined
  onClearError: () => void
  onSignIn: (_payload: ISignInPayload) => void
  onSignOut: () => void
}

export const AuthContext = React.createContext<IAuthContext>({
  authenticated: false,
  signingIn: false,
  error: undefined,
  onClearError: () => null,
  onSignIn: () => null,
  onSignOut: () => null,
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate: NavigateFunction = useNavigate()
  const { state: rootState, pathname }: Location = useLocation()
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [me, setMe] = useState<Maybe<MeType>>()
  const [error, setError] = useState<'invalid' | 'notFound' | undefined>()

  const [tokenLogin, { loading: tokenLoading }] = useTokenLoginMutation()
  const [login, { loading: signingIn }] = useLoginMutation()

  const [fetchMe, { loading: fetchingMe }] = useMeLazyQuery()

  const onSignIn = useCallback(
    (payload: ISignInPayload) => {
      if (payload.email && payload.password) {
        login({
          variables: {
            email: payload.email,
            password: payload.password,
            isAdmin: false,
            keepSignin: !!payload.keepSignin,
          },
          onCompleted: res => {
            if (res.login?.accessToken) {
              setAuthenticated(true)
              setStorageValue(AUTH_TOKEN_KEY, `JWT ${res.login.accessToken}`)
              navigate(rootState?.from?.pathname || homePath, { replace: true })
              setError(undefined)
            } else {
              setError('invalid')
            }
          },
          onError: () => {
            setError('notFound')
          },
        })
      }
    },
    [login, navigate, rootState?.from?.pathname],
  )

  const onSignOut = useCallback(() => {
    removeStorageValue(AUTH_TOKEN_KEY)
    setAuthenticated(false)
    navigate(signInPath, { replace: true })
  }, [navigate])

  useEffect(() => {
    if (publicPath.includes(pathname)) {
      return
    }
    const token = getStorageValue(AUTH_TOKEN_KEY)
    if (authenticated) {
      return
    }
    if (!token) {
      return
    } else {
      tokenLogin({
        variables: {
          isAdmin: false,
        },
        onCompleted: res => {
          if (res.tokenLogin?.accessToken) {
            setAuthenticated(true)
            setStorageValue(AUTH_TOKEN_KEY, `JWT ${res.tokenLogin.accessToken}`)
            navigate(rootState?.from?.pathname || homePath, { replace: true })
          } else {
            onSignOut()
          }
        },
        onError: () => {
          onSignOut()
        },
      })
    }
  }, [
    authenticated,
    navigate,
    onSignOut,
    pathname,
    rootState?.from?.pathname,
    tokenLogin,
  ])

  useEffect(() => {
    if (authenticated) {
      fetchMe({
        onCompleted: res => {
          setMe(res.me)
        },
      })
    }
  }, [authenticated, fetchMe])

  const values = useMemo(
    () => ({
      authenticated,
      me,
      signingIn: tokenLoading || signingIn,
      error,
      fetchingMe,
      onClearError: () => setError(undefined),
      onSignIn,
      onSignOut,
    }),
    [
      authenticated,
      me,
      error,
      fetchingMe,
      onSignIn,
      onSignOut,
      signingIn,
      tokenLoading,
    ],
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

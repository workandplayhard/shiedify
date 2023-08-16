import React, { useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { AuthWrapper } from '@/layout'
import {
  HomePage,
  SignInPage,
  NotFoundPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ContactUsPage,
  SubmittedMessagePage,
  OnBoardingPage,
  AlertsPage,
} from '@/pages'

import {
  signInPath,
  homePath,
  notFoundPath,
  forgotPasswordPath,
  resetPasswordPath,
  contactUsPath,
  submittedMessagePath,
  onBoardingPath,
  alertsPath,
} from '@/utils'

const AppRoutes: React.FC = () => {
  const onError = useCallback((e: Error) => {
    console.log({ appError: e })
  }, [])

  return (
    <ErrorBoundary onError={onError} fallback={<div />}>
      <Routes>
        <Route path="/" element={<Navigate to={homePath} />} />
        <Route path={signInPath} element={<SignInPage />} />
        <Route path={notFoundPath} element={<NotFoundPage />} />
        <Route path={forgotPasswordPath} element={<ForgotPasswordPage />} />
        <Route path={resetPasswordPath} element={<ResetPasswordPage />} />
        <Route path={contactUsPath} element={<ContactUsPage />} />
        <Route path={submittedMessagePath} element={<SubmittedMessagePage />} />
        <Route element={<AuthWrapper />}>
          <Route path={homePath} element={<HomePage />} />
          <Route path={onBoardingPath} element={<OnBoardingPage />} />
          <Route path={alertsPath} element={<AlertsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default AppRoutes

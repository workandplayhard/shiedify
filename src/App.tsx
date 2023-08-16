import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { I18nextProvider } from 'react-i18next'

import apolloClient from '@/apollo'
import Routes from '@/navigation/routes'
import i18n from './i18n'
import {
  AppContextProvider,
  AuthContextProvider,
  ToastProvider,
} from './contexts'

import './App.scss'

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <I18nextProvider i18n={i18n}>
        <ToastProvider>
          <AppContextProvider>
            <AuthContextProvider>
              <Routes />
            </AuthContextProvider>
          </AppContextProvider>
        </ToastProvider>
      </I18nextProvider>
    </Router>
  </ApolloProvider>
)

export default App

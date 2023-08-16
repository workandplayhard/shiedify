import React from 'react'
import classNames from 'classnames'

import LoginForm from './loginForm'

import bgImg from '@/assets/images/img_login-bg.png'

const SignInPage: React.FC = () => {
  return (
    <div
      className={classNames('login-page', {
        loading: false,
      })}
    >
      <div className="page-bg">
        <span className="bg-img">
          <img src={bgImg} alt="" />
        </span>
      </div>
      <LoginForm />
    </div>
  )
}

export default SignInPage

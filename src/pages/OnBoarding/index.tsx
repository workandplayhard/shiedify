import React from 'react'

import { CustomerAppLayout } from '@/layout'
import { OnBoardingContextProvider } from '@/contexts'
import Description from './components/description'
import Notes from './components/notes'
import Helper from './components/helper'
import AddDescriptor from './components/addDescriptor'

import mainBgImg from '@/assets/images/img_main-bg.png'

const OnBoarding: React.FC = () => {
  return (
    <CustomerAppLayout
      hasNav={false}
      className="page-wrap"
      wrapClassName="content-box"
    >
      <OnBoardingContextProvider>
        <div className="bg-img">
          <img src={mainBgImg} alt="" />
        </div>
        <div className="onboarding-data descriptors">
          <Description />
          <div className="data-wrap">
            <Notes />
            <Helper />
            <AddDescriptor />
          </div>
        </div>
      </OnBoardingContextProvider>
    </CustomerAppLayout>
  )
}

export default OnBoarding

import React from 'react'

import { BackButton, UserProfile, Tab, BackgroundGradient, MyIdeas } from 'components/MyAccount'

const MyAccount = () => {
  return (
    <div>
      <BackgroundGradient/>

      <div className="relative z-[1] pt-8 px-16">
        <BackButton/>

        <div className="mt-[14px]">
          <div className="bg-surface-500 rounded-t-xl px-10 pt-8 border-b border-b-divider-500">
            <UserProfile/>
            <Tab/>
          </div>

          <MyIdeas/>
        </div>
      </div>
    </div>
  )
}

export default MyAccount

import React from 'react'

import Account from './Account'
import ProfilePrivacy from './ProfilePrivacy'
import Security from './Security'

const Settings = () => {
  return (
    <div className="px-6 mt-6 pb-[148px]">
      <Account/>
      <ProfilePrivacy/>
      <Security/>
    </div>
  )
}

export default Settings

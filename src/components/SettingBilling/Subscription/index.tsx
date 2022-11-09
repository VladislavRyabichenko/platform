import React, { useState } from 'react'

import PeopleIsSubscribed from './PeopleIsSubscribed'
import AccountInfo from './AccountInfo'
import AsBecome from './AsBecome'

const Subscription = () => {
  const [userType] = useState('export-mentor')

  return (
    <div className="px-6 pt-6 pb-[42px] min-h-[702px]">
      {userType === 'regular' && (
        <PeopleIsSubscribed/>
      )}

      {userType === 'export-mentor' && (
        <>
          <AccountInfo/>
          <PeopleIsSubscribed containerClassName="py-5 border-b border-b-divider-light-400 dark:border-b-divider-500"/>
          <AsBecome/>
        </>
      )}
    </div>
  )
}

export default Subscription

import React from 'react'

import CurrentPlan from './CurrrentPlan'
import AccountInfo from './AccountInfo'

const Billing = () => {
  return (
    <div className="px-6 mt-6 pb-[168px]">
      <CurrentPlan/>
      <AccountInfo/>
    </div>
  )
}

export default Billing

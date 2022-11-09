import clsx from 'clsx'
import React from 'react'

import HeaderLabel from './HeaderLabel'
import GroupChart from './GroupChart'

const TradingPerformance = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'px-4 md:px-5',
      'pt-4 pb-6 rounded-xl',
      'md:min-w-[600px] desktop:min-w-[748px]',
      className
    )}>
      <HeaderLabel/>

      <GroupChart/>
    </div>
  )
}

export default TradingPerformance

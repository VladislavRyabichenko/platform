import clsx from 'clsx'
import React from 'react'

import ChartIllustration from './ChartIllustration'
import HeaderLabel from './HeaderLabel'

const TradeEvaluationChart = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'pt-4 px-5 pb-5 rounded-xl',
      'desktop:min-w-[748px]',
      className
    )}>
      <HeaderLabel/>

      <ChartIllustration/>
    </div>
  )
}

export default TradeEvaluationChart

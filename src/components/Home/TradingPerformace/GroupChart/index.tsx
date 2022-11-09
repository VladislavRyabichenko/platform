import clsx from 'clsx'
import React from 'react'

import Chart from './Chart'

const GroupChart = () => {
  return (
    <div className={clsx(
      'relative h-[260px]'
      // 'w-full xl:min-w-[708px]'
    )}>
      <Chart/>
    </div>
  )
}

export default GroupChart

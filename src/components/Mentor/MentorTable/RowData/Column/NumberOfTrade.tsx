import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

const NumberOfTrade = ({ className, value }:{
  className?: string
  value: string
}) => {
  const { xl } = useResponsive()

  return (
    <div className={clsx(
      className
    )}>
      {!xl && <p className="text-caption font-medium text-text-200 dark:text-text-400">No. of trades</p>}
      <p className={clsx(
        'text-caption xl:text-bodysmall',
        'font-bold text-text-400 dark:text-text-100 w-fit',
        'mt-1 xl:mt-0'
      )}>{value}</p>
    </div>
  )
}

export default NumberOfTrade

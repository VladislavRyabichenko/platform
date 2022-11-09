import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

const TotalProfitLoss = ({ className, data }:{
  className?: string,
  data: {
    currency: string,
    trends: string,
    percentage: string
  }
}) => {
  const { xl } = useResponsive()

  return (
    <div className={clsx(
      className
    )}>
      {!xl && <p className="text-caption font-medium text-text-400 text-right md:text-center">Total P/L ($-%)</p>}

      <p className={clsx(
        'text-caption xl:text-bodysmall',
        'space-x-1',
        'mt-1 xl:mt-0'
      )}>
        <span className="font-bold text-text-400 dark:text-text-100">{data.currency}</span>
        <span className={clsx(
          'font-medium',
          data.trends === 'up' ? 'text-success-500' : 'text-danger-500'
        )}>{data.percentage}</span>
      </p>

    </div>
  )
}

export default TotalProfitLoss

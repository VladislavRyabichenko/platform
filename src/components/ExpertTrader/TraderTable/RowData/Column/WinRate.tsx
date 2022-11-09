import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

const WinRate = ({ className, value }:{
  className?: string
  value: string
}) => {
  const { xl } = useResponsive()

  return (
    <div className={clsx(
      className
    )}>
      {!xl && <p className="text-caption font-medium text-text-200 dark:text-text-400">Win Rate (%)</p>}

      <p className={clsx(
        'mt-1 xl:mt-0',
        'text-caption xl:text-bodysmall',
        'font-bold xl:font-medium',
        'text-text-400 xl:text-success-500',
        'dark:text-text-100 dark:xl:text-success-500',
        'xl:w-fit'
      )}>{value}</p>
    </div>
  )
}

export default WinRate

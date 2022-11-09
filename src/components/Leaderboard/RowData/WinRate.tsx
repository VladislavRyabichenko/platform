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
      {!xl && <p className="text-caption font-medium text-text-400">Win Rate (%)</p> }
      <p className={clsx(
        'xl:w-fit',
        'mt-1 xl:mt-0',
        'text-caption xl:text-bodysmall',
        'font-bold xl:font-medium',
        'text-text-100 xl:text-success-500'
      )}>{value}</p>
    </div>
  )
}

export default WinRate

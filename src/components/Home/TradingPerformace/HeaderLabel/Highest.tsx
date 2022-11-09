import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

interface Props {
  className?:string
}

const Highest = ({ className }:Props) => {
  const { md } = useResponsive()

  return (
    <div className={clsx(
      'space-y-1',
      className
    )}>
      <p className="text-caption md:text-bodysmall font-normal text-text-200 dark:text-text-400">Highest {md && 'P/L'}</p>
      <p className="text-bodylarge md:text-h4 font-bold text-text-500 dark:text-text-100">2,390</p>
    </div>
  )
}

export default Highest

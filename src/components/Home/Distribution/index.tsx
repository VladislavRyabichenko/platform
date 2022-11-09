import clsx from 'clsx'
import React from 'react'
import ChartIllustration from './ChartIllustration'

const Distribution = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'py-4 rounded-xl',
      'min-w-[300px] desktop:min-w-[364px]',
      'px-2.5',
      className
    )}>
      <h2 className="text-bodymedium font-bold text-text-400 dark:text-text-200 mx-5 mb-5">Distribution Gain & Loses</h2>

      <ChartIllustration/>
    </div>
  )
}

export default Distribution

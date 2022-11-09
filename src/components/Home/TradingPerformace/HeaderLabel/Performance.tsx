import clsx from 'clsx'
import React from 'react'

interface Props {
  className?:string
}

const Performance = ({ className }:Props) => {
  return (
    <div className={clsx(
      'space-y-1',
      className
    )}>
      <h2 className="text-caption md:text-bodysmall font-normal text-text-200 dark:text-text-400">Trading Performance</h2>
      <div className="flex items-center gap-x-2">
        <p className="text-bodylarge md:text-h4 font-bold text-text-500 dark:text-text-100">1,814.80</p>
        <div className="flex items-center gap-x-1">
          <TrendUpIcon/>
          <p className="text-caption font-bold text-success-500">2,3%</p>
        </div>
      </div>
    </div>
  )
}

const TrendUpIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 5L8.75 9.75L6.25 7.25L2.5 11" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 5H13.5V8" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Performance

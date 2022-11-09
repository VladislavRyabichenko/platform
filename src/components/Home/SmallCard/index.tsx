import clsx from 'clsx'
import React from 'react'

import ChartArea from './Chart'

interface Props {
    title: string
    value: string
    isProfit: boolean
    chartData?: {
      return?:number
      value?:number
      currency?: number
      rate?:number
    }[]
    dataKey: 'value' | 'return' | 'currency' | 'rate'
}

const SmallCard = ({ title, value, isProfit, chartData, dataKey } : Props) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'relative w-full rounded-xl',
      'px-4 sm:px-5',
      'pt-6 pb-4 sm:py-4'
    )}>
      <div className={clsx(
        'xs:absolute',
        'h-fit m-auto top-0 bottom-0 right-5'
      )}>
        <ChartArea dataKey={dataKey} data={chartData} isProfit={isProfit} />
      </div>

      <p className={clsx(
        'mt-4 sm:mt-0 font-medium',
        'text-caption sm:text-bodysmall',
        'text-text-300'
      )}>{title}</p>

      <p className="text-text-500 dark:text-[#D6D6DC] text-bodylarge sm:text-h4 font-bold mt-2 sm:mt-5">{value}</p>

      <div className={clsx(
        'mt-2 sm:mt-1',
        'flex space-x-1 flex-wrap'
      )}>
        {isProfit ? <LogoUp/> : <LogoDown/>}

        <span className={clsx(
          'text-caption font-bold',
          isProfit ? 'text-success-500' : 'text-danger-500'
        )}>2,3%</span>

        <span className="text-text-200 dark:text-text-400 text-caption font-medium">vs. prev month</span>
      </div>

    </div>
  )
}

const LogoUp = () => {
  return (
    <svg className="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 5L8.75 9.75L6.25 7.25L2.5 11" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 5H13.5V8" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const LogoDown = () => {
  return (
    <svg className="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 11L8.75 6.25L6.25 8.75L2.5 5" stroke="#E93A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 11H13.5V8" stroke="#E93A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default SmallCard

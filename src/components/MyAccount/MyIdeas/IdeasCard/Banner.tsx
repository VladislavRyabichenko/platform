import clsx from 'clsx'
import React from 'react'

const Banner = () => {
  return (
    <div className={clsx(
      'flex justify-center items-center space-x-1',
      'py-1',
      'bg-[#5AC9941A] dark:bg-success-950',
      'rounded-t-xl'
    )}>
      <StockIcon/>
      <p className="text-bodysmall font-bold text-success-500">AMD Profit $284,84</p>
    </div>
  )
}

const StockIcon = () => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10.5V6L2.5 9.5V14H7L10.5 10.5H6Z" fill="#5AC994"/>
      <path d="M14.5 2H2.5L6 5.5H11V10.5L14.5 14V2Z" fill="#5AC994"/>
    </svg>
  )
}

export default Banner

import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

const Followers = ({ className, textClassName, value }:{
  className?: string
  textClassName?: string
  value: string
}) => {
  const { xl } = useResponsive()

  return (
    <div className={clsx(
      'flex',
      className
    )}>
      {!xl && <Icon/>}
      <p className={clsx(
        'text-caption xl:text-bodysmall font-medium text-text-400 w-fit',
        'xl:text-text-400 dark:xl:text-text-100',
        textClassName
      )}>
        {value}
        {!xl && ' followers'}
      </p>
    </div>
  )
}

const Icon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3346 14V12.6667C13.3346 11.9594 13.0537 11.2811 12.5536 10.781C12.0535 10.281 11.3752 10 10.668 10H5.33464C4.62739 10 3.94911 10.281 3.44902 10.781C2.94892 11.2811 2.66797 11.9594 2.66797 12.6667V14" stroke="#4C4D5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.9987 7.33333C9.47146 7.33333 10.6654 6.13943 10.6654 4.66667C10.6654 3.19391 9.47146 2 7.9987 2C6.52594 2 5.33203 3.19391 5.33203 4.66667C5.33203 6.13943 6.52594 7.33333 7.9987 7.33333Z" stroke="#4C4D5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Followers

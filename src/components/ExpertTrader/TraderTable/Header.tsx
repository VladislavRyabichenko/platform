import clsx from 'clsx'
import React from 'react'

import useResponsive from 'utils/useResponsive'

const Header = () => {
  const { xl } = useResponsive()

  return (
    <div className={clsx(
      'flex items-center',
      'px-6',
      'pb-3',
      'pt-4',
      'w-full',
      'border-b border-b-divider-light-400 dark:border-b-divider-500'
    )}>
      {xl
        ? (
          <>
            <Item className="w-[5%]" text="#"/>
            <Item className="w-[20%]" text="Name"/>
            <Item className="w-[9%] flex justify-end" text="No. of trades"/>
            <Item className="w-[10%] flex justify-end" text="Win Rate(%)"/>
            <Item className="w-[13.5%] flex justify-end" text="Total P/L ($-%)"/>
            <Item className="w-[13.5%] flex justify-end" text="Today’s P/L ($-%)"/>
            <Item className="w-[7.5%] flex justify-end" text="Followers"/>
            <Item className="w-[11.5%] flex justify-end" text="1Y Performance"/>
            <div className="w-[10%]"></div>
          </>
        )
        : (
          <>
            <Item className="w-[5%]" text="#"/>
            <Item className="w-[95%]" text="List"/>
          </>
        )}
    </div>
  )
}

const Item = ({ className, text }:{
  text:string
  className:string
}) => {
  return (
    <div className={clsx(
      'flex items-center space-x-1',
      className
    )}>
      <p className="text-caption font-medium text-text-300 dark:text-text-400">{text}</p>
      <Icon/>
    </div>
  )
}

const Icon = () => {
  return (
    <svg className="cursor-pointer" width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="fill-[#999AA9] dark:fill-[#4C4D5F]" d="M2.14165 5.625H5.8604C6.19477 5.625 6.36196 6.13085 6.12602 6.42578L4.26665 8.74999C4.11977 8.93359 3.88227 8.93359 3.73696 8.74999L1.87603 6.42578C1.64009 6.13085 1.80728 5.625 2.14165 5.625ZM6.12602 3.57422L4.26665 1.25C4.11977 1.06641 3.88227 1.06641 3.73696 1.25L1.87603 3.57422C1.64009 3.86914 1.80728 4.375 2.14165 4.375H5.8604C6.19477 4.375 6.36196 3.86914 6.12602 3.57422Z" />
    </svg>
  )
}

export default Header

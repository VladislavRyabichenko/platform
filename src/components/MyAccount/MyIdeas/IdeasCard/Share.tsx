import clsx from 'clsx'
import React from 'react'

import { Button, PopOver } from 'components/common'

const Share = ({ onClick } :{
  onClick(): void
}) => {
  return (
    <PopOver
      className={{
        popOverContainer: clsx(
          'w-[204px] right-0',
          'mt-2.5'
        )
      }}
      popOverButton={({ handleToggle }) => (
        <Button
          className="flex items-center gap-x-2"
          onClick={() => {
            onClick()
            handleToggle()
          }}
        >
          {({ isHover }) => (
            <>
              <Icon isHover={isHover} />
              <p className={clsx(
                'text-caption font-medium',
                isHover ? 'text-primary-500' : 'text-text-300 dark:text-text-400'
              )}>Share</p>
            </>
          )}
        </Button>
      )}
    >
      {() => (
        <div className='py-4 px-5'>
          <ItemButton icon={<MessageIcon/>} value='Send via Message' />
          <ItemButton icon={<CopyIcon/>} value='Copy link post' />
          <ItemButton icon={<ShareIcon/>} value='Share Idea' />
        </div>
      )}
    </PopOver>
  )
}

const ItemButton = ({ icon, value }:{
  icon: React.ReactNode
  value: string
}) => {
  return (
    <div className={clsx(
      'flex space-x-2 items-center',
      'py-2 first:pt-0 last:pb-0',
      'border-b',
      'border-b-divider-light-400 dark:border-b-divider-400',
      'last:border-none'
    )}>
      {icon}
      <p className="text-bodysmall font-medium text-text-400 dark:text-text-100">{value}</p>
    </div>
  )
}

const MessageIcon = () => {
  return (
    <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66536 2.66699H13.332C14.0654 2.66699 14.6654 3.26699 14.6654 4.00033V12.0003C14.6654 12.7337 14.0654 13.3337 13.332 13.3337H2.66536C1.93203 13.3337 1.33203 12.7337 1.33203 12.0003V4.00033C1.33203 3.26699 1.93203 2.66699 2.66536 2.66699Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6654 4L7.9987 8.66667L1.33203 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const CopyIcon = () => {
  return (
    <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7692 6H7.23077C6.55103 6 6 6.55103 6 7.23077V12.7692C6 13.449 6.55103 14 7.23077 14H12.7692C13.449 14 14 13.449 14 12.7692V7.23077C14 6.55103 13.449 6 12.7692 6Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.23077 10C2.90435 10 2.5913 9.87033 2.36048 9.63952C2.12967 9.4087 2 9.09565 2 8.76923V3.23077C2 2.90435 2.12967 2.5913 2.36048 2.36048C2.5913 2.12967 2.90435 2 3.23077 2H8.76923C9.09565 2 9.4087 2.12967 9.63952 2.36048C9.87033 2.5913 10 2.90435 10 3.23077" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ShareIcon = () => {
  return (
    <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3346 5.33333L8.0013 2L4.66797 5.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const Icon = ({ isHover }:{
  isHover: boolean
}) => {
  return (
    <svg className={isHover ? 'stroke-primary-500' : 'stroke-icon-light-500 dark:stroke-icon-500'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5484_150002)">
        <path d="M14.6654 1.33301L7.33203 8.66634" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6654 1.33301L9.9987 14.6663L7.33203 8.66634L1.33203 5.99967L14.6654 1.33301Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_5484_150002">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Share

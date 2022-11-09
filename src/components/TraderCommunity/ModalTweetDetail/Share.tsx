import React from 'react'

import { Button } from 'components/common'

const Share = () => {
  return (
    <Button className="flex items-center gap-x-2">
      {() => (
        <>
          <Icon/>
          <p className="text-caption font-medium text-text-300 dark:text-text-400">Share</p>
        </>
      )}
    </Button>
  )
}

const Icon = () => {
  return (
    <svg className="stroke-icon-light-500 dark:stroke-icon-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

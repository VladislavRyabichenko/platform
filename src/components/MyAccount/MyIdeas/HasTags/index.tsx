import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const HashTags = ({ className }:{
  className?: string
}) => {
  return (
    <div className={clsx(
      'bg-surface-400',
      'border border-divider-500 rounded-xl',
      className
    )}>
      <div className="py-3 px-5 border-b border-b-divider-500">
        <h5 className="text-bodymedium font-bold text-[#9899A3]">Your Hashtags</h5>
      </div>

      <div className="space-y-3 pt-4 px-5 pb-6">
        <HashTagItem numberTweet="32" tag="asalways" />
        <HashTagItem numberTweet="30" tag="up" />
        <HashTagItem numberTweet="24" tag="closure" />
        <HashTagItem numberTweet="17" tag="closure" />
        <HashTagItem numberTweet="12" tag="monolog" />
      </div>
    </div>
  )
}

const HashTagItem = ({ tag, numberTweet }:{
  numberTweet:string
  tag: string
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-caption font-medium text-text-400">{numberTweet} tweet</p>
        <h6 className="text-bodymedium font-bold text-text-100">#{tag}</h6>
      </div>

      <ThreeDotsButton/>
    </div>
  )
}

const ThreeDotsButton = () => {
  return (
    <Button>
      {() => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9987 8.66634C8.36689 8.66634 8.66536 8.36786 8.66536 7.99967C8.66536 7.63148 8.36689 7.33301 7.9987 7.33301C7.63051 7.33301 7.33203 7.63148 7.33203 7.99967C7.33203 8.36786 7.63051 8.66634 7.9987 8.66634Z" fill="#4C4D5F" stroke="#4C4D5F" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.9987 4.00033C8.36689 4.00033 8.66536 3.70185 8.66536 3.33366C8.66536 2.96547 8.36689 2.66699 7.9987 2.66699C7.63051 2.66699 7.33203 2.96547 7.33203 3.33366C7.33203 3.70185 7.63051 4.00033 7.9987 4.00033Z" fill="#4C4D5F" stroke="#4C4D5F" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.9987 13.3333C8.36689 13.3333 8.66536 13.0349 8.66536 12.6667C8.66536 12.2985 8.36689 12 7.9987 12C7.63051 12 7.33203 12.2985 7.33203 12.6667C7.33203 13.0349 7.63051 13.3333 7.9987 13.3333Z" fill="#4C4D5F" stroke="#4C4D5F" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      )}
    </Button>
  )
}

export default HashTags

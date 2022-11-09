import clsx from 'clsx'
import React from 'react'

import { IMessage } from './d.types'

import { Button } from 'components/common'

const MessageItem = ({ imgSrc, name, message, time, isRead, onClick }: IMessage) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        'w-full',
        'grid grid-cols-[max-content_auto_max-content]',
        'items-center gap-x-3',
        'py-[11px] first:pt-0 last:pb-0',
        'border-b border-b-divider-light-400 dark:border-b-divider-400',
        'last:border-none'
      )}
    >
      {() => (
        <>
          <img className="w-8 h-8 rounded-full" src={imgSrc} alt=""/>
          <div className="text-caption text-left">
            <h5 className="font-bold text-text-400 dark:text-text-100">{name}</h5>
            <div className="flex items-center space-x-[2px] mt-1">
              {isRead && <MessageIsReadIcon/>}
              <p className="font-medium text-text-200 dark:text-text-400">{message}</p>
            </div>
          </div>
          <p className="text-caption font-medium text-text-200 dark:text-text-500">{time}</p>
        </>
      )}
    </Button>
  )
}

const MessageIsReadIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9202 4.55176L4.63449 10.8375L1.77734 7.98033" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3521 4.55176L8.06641 10.8375" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default MessageItem

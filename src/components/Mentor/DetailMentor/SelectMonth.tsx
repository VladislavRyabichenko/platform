import clsx from 'clsx'
import React, { useState } from 'react'

import { Button } from 'components/common'

const SelectMonth = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const arrButtons = ['3 months', '2 months', '7 days', 'Custom Date']

  const handleToogle = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  }

  return (
    <div className="relative">
      <Button
        className={clsx(
          'flex items-center',
          'space-x-2',
          'border border-divider-500 rounded-md',
          'h-9 w-[117px]',
          'justify-center'
        )}
        onClick={handleToogle}
      >
        {() => (
          <>
            <p className="text-caption font-medium text-text-400">This Month</p>
            <ArrowIcon
              className={clsx(
                'transition-all duration-300 transform',
                isOpen ? 'rotate-180' : 'rotate-0'
              )}
            />
          </>
        )}
      </Button>

      <div className={clsx(
        'absolute w-full',
        'bg-surface-400',
        'text-caption font-medium text-text-400',
        'border border-divider-500 rounded-md',
        'px-4',
        'mt-1',
        'transition-all duration-300',
        isOpen ? 'max-h-[132px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        {arrButtons.map((item, key) => {
          return (
            <Button key={key} className={clsx(
              'w-full',
              'block py-2',
              'border-b border-b-divider-400',
              'last:border-none',
              'text-left'
            )}>
              {() => item}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

const ArrowIcon = ({ className }:{
  className: string
}) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default SelectMonth

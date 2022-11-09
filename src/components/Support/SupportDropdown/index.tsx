import clsx from 'clsx'
import React, { useState } from 'react'

import { Button } from 'components/common'

const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToogle = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  }

  return (
    <div className={clsx(
      'relative',
      'mt-[32px]'
    )}>
      <Button
        className={clsx(
          'flex items-center gap-x-1',
          'bg-primary-500 py-2.5 px-4 rounded-md',
          'text-bodysmall font-bold text-white'
        )}
        onClick={handleToogle}
      >
        {() => (
          <>
            Contact Support Team
            <ArrowIcon className={clsx(
              'transition-all duration-300 transform',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}/>
          </>
        )}
      </Button>

      <div
        className={clsx(
          'w-full absolute',
          'flex flex-col mt-2.5',
          'py-4 px-5',
          'bg-[#15162E]',
          'border border-[#2F2F32]',
          'rounded-[10px]',
          'transition-all duration-300',
          isOpen ? 'max-h-[130px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Button className={clsx(
          'text-left text-bodysmall font-bold text-text-100 pb-2',
          'border-b border-b-divider-400'
        )}>
          {() => 'Suggestions'}
        </Button>
        <Button className={clsx(
          'text-left text-bodysmall font-bold text-text-100 py-2',
          'border-b border-b-divider-400'
        )}>
          {() => 'Issue Reporting'}
        </Button>
        <Button className={clsx(
          'text-left text-bodysmall font-bold text-text-100 pt-2'
        )}>
          {() => 'Other'}
        </Button>
      </div>
    </div>
  )
}

const ArrowIcon = ({ className }:{
    className?:string
}) => {
  return (
    <svg className={clsx(
      className
    )} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default SupportDropdown

import clsx from 'clsx'
import React, { useState } from 'react'

import Button from 'components/common/Button'
import Item from './Item'
import { ThirdParty, TraderManual } from './Icon'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToogle = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  }

  return (
    <div className="relative mx-auto mt-8">
      <Button
        className={clsx(
          'mx-auto',
          'flex items-center space-x-1',
          'px-4 py-2.5',
          'bg-primary-500',
          'rounded-md'
        )}
        onClick={handleToogle}
      >
        {() => (
          <>
            <p className="text-bodysmall font-bold text-white">Connect your Stock Broker</p>
            <ArrowIcon className={clsx(
              'transition-all duration-300 transform',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}/>
          </>
        )}
      </Button>

      <div
        className={clsx(
          'absolute',
          'right-24',
          'min-w-[306px]',
          'flex flex-col mt-1.5',
          'py-4 px-5',
          'space-y-5',
          'bg-[#15162E]',
          'border border-[#2F2F32]',
          'rounded-[10px]',
          'transition-all duration-300',
          isOpen ? 'max-h-[132px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Item
          icon={ThirdParty}
          title="Connect Your Stock Broker"
          description="By connecting to 3rd party"
        />
        <Item
          icon={TraderManual}
          title="Add Trades Manually"
          description="By adding trades data manually"
        />
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

export default Dropdown

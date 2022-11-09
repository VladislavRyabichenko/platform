import clsx from 'clsx'
import React, { useState } from 'react'

import { Button, Modal } from 'components/common'

const ModalCancelPlan = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="text-caption font-bold text-danger-500"
      >
        {() => 'Cancel Plans'}
      </Button>

      <Modal
        isShow={isOpen}
        className={{
          rootContainer: 'flex items-center',
          modalContainer: clsx(
            'max-w-[366px]',
            'px-[26px] pt-10 pb-6'
          )
        }}
      >
        <div className="w-fit mx-auto mb-4">
          <LogoIcon/>
        </div>

        <div className="space-y-2">
          <h1 className="text-center text-bodylarge font-bold text-text-500 dark:text-text-100">Cancel your plan</h1>
          <p className="text-center text-bodysmall font-medium text-text-200 dark:text-text-400">Are you sure want to cancel your existing plan?</p>
        </div>

        <div className="flex space-x-3 mt-[52px]">
          <Button
            onClick={() => setIsOpen(false)}
            className={clsx(
              'text-bodysmall font-bold',
              'text-text-400 dark:text-text-100',
              'rounded-md',
              'w-full h-10',
              'border border-divider-light-400 dark:border-divider-500'
            )}
          >
            {() => 'Cancel'}
          </Button>
          <Button className={clsx(
            'text-bodysmall font-bold',
            'text-white dark:text-text-100',
            'rounded-md',
            'w-full h-10',
            'bg-danger-500'
          )}>
            {() => 'Yes, Cancel Plan'}
          </Button>
        </div>
      </Modal>
    </>
  )
}

const LogoIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="fill-[#E93A6F]/10 dark:fill-[#23243B]" cx="24" cy="24" r="24" />
      <circle className="fill-[#E93A6F]/10 dark:fill-[#372640]" cx="24" cy="24" r="24" />
      <path d="M22.2888 14.8602L13.8188 29.0002C13.6442 29.3026 13.5518 29.6455 13.5508 29.9947C13.5498 30.3439 13.6403 30.6873 13.8132 30.9907C13.9862 31.2941 14.2355 31.547 14.5365 31.7241C14.8375 31.9012 15.1796 31.9964 15.5288 32.0002H32.4688C32.818 31.9964 33.1601 31.9012 33.4611 31.7241C33.7621 31.547 34.0114 31.2941 34.1844 30.9907C34.3573 30.6873 34.4478 30.3439 34.4468 29.9947C34.4458 29.6455 34.3534 29.3026 34.1788 29.0002L25.7088 14.8602C25.5305 14.5663 25.2795 14.3233 24.98 14.1547C24.6805 13.9861 24.3425 13.8975 23.9988 13.8975C23.6551 13.8975 23.3171 13.9861 23.0176 14.1547C22.7181 14.3233 22.4671 14.5663 22.2888 14.8602Z" fill="#E93A6F"/>
      <path className="stroke-white dark:stroke-[#23243B]" d="M24 20V24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="stroke-white dark:stroke-[#372640]" d="M24 20V24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="stroke-white dark:stroke-[#23243B]" d="M24 28H24.01" stroke="#23243B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="stroke-white dark:stroke-[#372640]" d="M24 28H24.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ModalCancelPlan

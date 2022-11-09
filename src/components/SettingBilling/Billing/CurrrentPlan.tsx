import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'
import ModalCancelPlan from './ModalCancelPlan'

const CurrentPlan = () => {
  return (
    <div className="flex justify-between items-start pb-7">
      <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Current Plan</h4>

      <div className={clsx(
        'max-w-[608px] w-full',
        'border rounded-lg',
        'border-divider-light-400 dark:border-divider-500',
        'px-5 pt-5'
      )}>
        <div className="grid gap-x-3 grid-cols-[max-content_auto_max-content]">
          <ProPlanIcon/>

          <div>
            <p className="text-bodysmall font-bold text-text-400 dark:text-text-100">Pro Plan</p>
            <p className="text-caption font-medium text-text-200 dark:text-text-400">Get access to bunch feature we have</p>
          </div>

          <p className="text-bodysmall font-bold text-text-400 dark:text-text-100">
            <span className="text-h4">$10</span>/month
          </p>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-caption">
            <span className="font-medium text-text-300 dark:text-text-400">Next payment will be</span> {' '}
            <span className="font-bold text-text-400 dark:text-text-100">December 9, 2023</span>
          </p>

          <ProgressBar/>
        </div>

        <div className={clsx(
          'flex items-center justify-between py-3 mt-4',
          'border-t border-t-divider-light-400 dark:border-t-divider-500'
        )}>
          <ModalCancelPlan/>

          <Button className={clsx(
            'flex items-center space-x-1',
            'text-caption font-bold text-primary-500'
          )}>
            {() => (
              <>
                <p>Upgrade plans</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 11.75L11.75 4.25" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.25 4.25H11.75V11.75" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

const ProPlanIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="fill-[#F2B007]/10 dark:fill-[#2C2D43]" cx="16" cy="16" r="16"/>
      <path d="M19.9429 15.1469H17.8829V10.3469C17.8829 9.22692 17.2763 9.00026 16.5363 9.84026L16.0029 10.4469L11.4896 15.5803C10.8696 16.2803 11.1296 16.8536 12.0629 16.8536H14.1229V21.6536C14.1229 22.7736 14.7296 23.0003 15.4696 22.1603L16.0029 21.5536L20.5163 16.4203C21.1363 15.7203 20.8763 15.1469 19.9429 15.1469Z" fill="#F2B007"/>
    </svg>
  )
}

const ProgressBar = () => {
  return (
    <svg width="568" height="8" viewBox="0 0 568 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-[#F0F0F5] dark:fill-[#2C2D43]" width="568" height="8" rx="4" />
      <rect className="fill-[#5AC994]" width="420" height="8" rx="4" />
    </svg>
  )
}

export default CurrentPlan

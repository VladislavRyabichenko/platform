import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const Account = () => {
  return (
    <div className="flex justify-between items-start pb-6">
      <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Account</h4>

      <div className={clsx(
        'max-w-[608px] w-full'
      )}>
        <div className='border border-divider-light-400 dark:border-divider-500 rounded-lg'>
          <div className="grid gap-x-3 grid-cols-[max-content_auto_max-content_max-content] items-center py-4 px-5">
            <Avatar/>
            <div>
              <p className="text-bodymedium font-bold text-text-400 dark:text-text-100">Broker 1</p>
              <p className="text-caption font-medium text-text-200 dark:text-text-300">gourav@apptunix.com</p>
            </div>
            <CheckListIcon/>
            <ThreeDotButton/>
          </div>

          <div className={clsx(
            'flex items-center justify-between',
            'border-t border-t-divider-light-400 dark:border-t-divider-500',
            'py-4 px-5'
          )}>
            <AddExistingAccountButton/>

            <Button className="text-bodysmall font-medium text-danger-500">
              {() => 'Logout from all accounts'}
            </Button>
          </div>
        </div>

        <p className="text-bodysmall font-medium text-text-200 dark:text-text-400 mt-3">Upgrade your plan, connect and add up to 4 accounts</p>
      </div>
    </div>
  )
}

const Avatar = () => {
  return (
    <img className="w-8" src={require('./avatar.png')} alt="" />
  )
}

const CheckListIcon = () => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-[#2160DC]/10 dark:fill-[#161D3F]" width="28" height="28" rx="14" />
      <path d="M19.3346 10L12.0013 17.3333L8.66797 14" stroke="#2160DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ThreeDotButton = () => {
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

const AddExistingAccountButton = () => {
  return (
    <Button className={clsx(
      'flex items-center space-x-2',
      'text-bodysmall font-medium text-primary-500',
      'opacity-50'
    )}>
      {() => (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.0013 0.666992C3.9513 0.666992 0.667969 3.95033 0.667969 8.00033C0.667969 12.0503 3.9513 15.3337 8.0013 15.3337C12.0513 15.3337 15.3346 12.0503 15.3346 8.00033C15.3346 3.95033 12.0513 0.666992 8.0013 0.666992ZM8.66797 10.667C8.66797 10.8438 8.59773 11.0134 8.47271 11.1384C8.34768 11.2634 8.17811 11.3337 8.0013 11.3337C7.82449 11.3337 7.65492 11.2634 7.5299 11.1384C7.40487 11.0134 7.33463 10.8438 7.33463 10.667V8.66699H5.33464C5.15782 8.66699 4.98826 8.59675 4.86323 8.47173C4.73821 8.34671 4.66797 8.17714 4.66797 8.00033C4.66797 7.82351 4.73821 7.65394 4.86323 7.52892C4.98826 7.4039 5.15782 7.33366 5.33464 7.33366H7.33463V5.33366C7.33463 5.15685 7.40487 4.98728 7.5299 4.86225C7.65492 4.73723 7.82449 4.66699 8.0013 4.66699C8.17811 4.66699 8.34768 4.73723 8.47271 4.86225C8.59773 4.98728 8.66797 5.15685 8.66797 5.33366V7.33366H10.668C10.8448 7.33366 11.0143 7.4039 11.1394 7.52892C11.2644 7.65394 11.3346 7.82351 11.3346 8.00033C11.3346 8.17714 11.2644 8.34671 11.1394 8.47173C11.0143 8.59675 10.8448 8.66699 10.668 8.66699H8.66797V10.667Z" fill="#2160DC"/>
          </svg>
          <span>Add an existing account</span>
        </>
      )}
    </Button>
  )
}

export default Account

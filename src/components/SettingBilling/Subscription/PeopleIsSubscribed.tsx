import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'

const PeopleIsSubscribed = ({ containerClassName }:{
  containerClassName?: string
}) => {
  return (
    <div className={containerClassName}>
      <p className="text-bodysmall font-bold text-text-300 dark:text-text-400">People Who I Subscribed</p>

      <div className="flex items-center justify-between space-x-5 mt-2">
        <CardItem amount={10} name="Mentors"/>
        <CardItem amount={34} name="Traders"/>
      </div>
    </div>
  )
}

const CardItem = ({ amount, name }:{
  amount: number
  name: string,
}) => {
  return (
    <div className={clsx(
      'flex items-center justify-between',
      'px-5 pb-5 pt-4',
      'border border-divider-light-400 dark:border-divider-500',
      'rounded-lg w-full'
    )}>
      <div>
        <p className="text-bodylarge font-bold text-text-400 dark:text-text-100">{amount} {name}</p>
        <p className="text-caption font-medium text-text-200 dark:text-text-400">You’ve been following 10 mentors</p>
      </div>

      <Button className={clsx(
        'flex items-center justify-center',
        'w-24 h-8',
        'bg-[#2160DC]/10 dark:bg-primary-950',
        'space-x-2 rounded-md'
      )}>
        {() => (
          <>
            <p className="text-caption font-bold text-primary-500">See list</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33203 8H12.6654" stroke="#2160DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33301L12.6667 7.99967L8 12.6663" stroke="#2160DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </Button>
    </div>
  )
}

export default PeopleIsSubscribed

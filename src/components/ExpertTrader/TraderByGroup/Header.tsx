import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const Header = ({ id, title, description }:{
  id: string
  title: string
  description: string
}) => {
  return (
    <div className={clsx(
      'w-full xl:w-[182px]',
      'xl:mt-[27px]',
      'mb-6 xl:mb-0',
      'grid xl:block',
      'grid-cols-[auto_max-content] md:grid-cols-[min-content_minmax(0,100%)_min-content]',
      'items-center',
      'pr-5 md:pr-6 xl:pr-0',
      'gap-x-4',
      'gap-y-4'
    )}>
      <Label id={id} value={title} className="col-span-2 md:col-span-1"/>
      <p className={clsx(
        'col-span-1',
        'xl:mt-2',
        'text-caption font-medium text-text-200 dark:text-text-400',
        id === 'best-performance' && 'md:w-[301px] xl:w-[163px]',
        id === 'mentors-of-this-week' && 'md:w-[274px] xl:w-[182px]'
      )}>
        {description}
      </p>

      <div className={clsx(
        'col-span-1',
        'flex items-center space-x-2.5',
        'xl:mt-6'
      )}>
        <ButtonLeft id={id}/>
        <ButtonRight id={id}/>
      </div>
    </div>
  )
}

const Label = ({ id, value, className }:{
  id: string
  value: string
  className?: string
}) => {
  return (
    <div className={clsx(
      'w-fit',
      'py-[5px] px-3',
      id === 'best-performance' && 'bg-success-500',
      id === 'mentors-of-this-week' && 'bg-sky-500',
      'rounded-l-2xl rounded-t-2xl',
      className
    )}>
      <p className="text-bodymedium font-bold text-white whitespace-nowrap">
        {value}
      </p>
    </div>
  )
}

const ButtonLeft = ({ id }: {id: string}) => {
  return (
    <Button className={`prev-button-${id}`}>
      {() => (
        <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4L6 8L10 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

const ButtonRight = ({ id }: {id: string}) => {
  return (
    <Button className={`next-button-${id}`}>
      {() => (
        <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

export default Header

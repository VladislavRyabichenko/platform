import React from 'react'

import { Button } from 'components/common'
import CalendarNavigation from './CalendarNavigation'
import clsx from 'clsx'
import HeatMapIllustration from './HeatMapIllustration'

const CalendarHeatMap = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'py-4 px-5 rounded-xl',
      'min-w-[300px] desktop:min-w-[364px]',
      className
    )}>
      <div className={clsx(
        'flex items-center justify-between',
        'border-b',
        'border-b-divider-light-400 dark:border-b-divider-500',
        'pb-4',
        'mb-[14px]'
      )}>
        <CalendarNavigation/>

        <Button className="flex items-center gap-x-1 text-bodymedium font-medium text-brand-primary-main dark:text-primary-500">
          {() => (
            <>
              See details
              <svg className="stroke-brand-primary-main dark:stroke-primary-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25 11.75L11.75 4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.25 4.25H11.75V11.75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </Button>
      </div>

      <HeatMapIllustration/>
    </div>
  )
}

export default CalendarHeatMap

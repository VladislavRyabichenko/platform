import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const ButtonFilter = () => {
  return (
    <Button className={clsx(
      'bg-white dark:bg-surface-400',
      'flex items-center',
      'space-x-2',
      'text-bodysmall font-medium',
      'text-text-400 dark:text-text-200',
      'py-2.5',
      'px-4',
      'rounded-md'
    )}>
      {() => (
        <>
          <p>Filter</p>
          <Icon/>
        </>
      )}
    </Button>
  )
}

const Icon = () => {
  return (
    <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ButtonFilter

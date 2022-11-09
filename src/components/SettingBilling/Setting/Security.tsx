import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'

const Security = () => {
  return (
    <div className={clsx(
      'flex justify-between items-start pt-6',
      'border-t border-t-divider-light-400 dark:border-t-divider-500'
    )}>
      <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Security</h4>

      <div className={clsx(
        'max-w-[608px] w-full'
      )}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-bodysmall font-medium text-text-400 dark:text-text-100">Password</h4>
            <p className="text-caption font-medium text-text-200 dark:text-text-400 mt-1">Last changed 20 days ago</p>
          </div>

          <div className="flex items-center space-x-6">
            <p className="text-bodymedium font-medium text-icon-light-500 dark:text-text-100">•••••••••</p>
            <Button className={clsx(
              'bg-[#2160DC]/10 dark:bg-primary-950',
              'w-[52px] h-8',
              'text-caption font-medium text-primary-500 rounded-md'
            )}>
              {() => 'Edit'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security

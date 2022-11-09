import { Button } from 'components/common'
import React from 'react'

const HeaderLabel = () => {
  return (
    <div className="flex items-center justify-between mb-[18px]">
      <div className="space-y-[2px]">
        <p className="text-bodymedium font-bold text-text-400 dark:text-text-200">Trade Evaluation Score Curve</p>
        <p className="text-caption font-medium text-text-200 dark:text-text-400">Your Monthly Curve Trend</p>
      </div>

      <div className="flex gap-x-3">
        <Button>
          {() => (
            <svg className="stroke-icon-light-400 dark:stroke-text-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4L6 8L10 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Button>

        <Button>
          {() => (
            <svg className="stroke-icon-light-400 dark:stroke-text-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Button>
      </div>
    </div>
  )
}

export default HeaderLabel

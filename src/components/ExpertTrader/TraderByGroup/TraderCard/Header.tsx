import React from 'react'

import { Button } from 'components/common'
import clsx from 'clsx'

const Header = ({ name }:{
  name: string
}) => {
  return (
    <div className={clsx(
      'flex items-center justify-between',
      'border-b border-b-divider-light-400 dark:border-b-divider-500',
      'pb-3'
    )}>
      <div className="flex items-center space-x-2">
        <img className="h-8 w-8" src={require('./avatar.png')} alt=""/>

        <div>
          <p className="text-bodysmall font-bold text-text-400 dark:text-text-100">{name}</p>
          <p className="text-caption font-medium text-text-200 dark:text-text-400">To the moon 🚀</p>
        </div>
      </div>

      <Button>
        {() => (
          <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33203 8H12.6654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 3.33301L12.6667 7.99967L8 12.6663" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </Button>
    </div>
  )
}

export default Header

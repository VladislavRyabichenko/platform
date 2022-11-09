import clsx from 'clsx'
import React, { useState } from 'react'

import { Button } from 'components/common'

const Tab = ({ className }:{className?:string}) => {
  const [tabActive, setTabActive] = useState('home')

  return (
    <div className={clsx(
      'flex items-start gap-x-8',
      'border-b border-divider-light-500 dark:border-b-divider-500',
      className
    )}>
      <TabButton isActive={tabActive === 'home'} onClick={() => setTabActive('home')}>
        Home
      </TabButton>
      <TabButton isActive={tabActive === 'likes'} onClick={() => setTabActive('likes')}>
        Likes
      </TabButton>
      <TabButton isActive={tabActive === 'following'} onClick={() => setTabActive('following')}>
        Following
      </TabButton>
      <TabButton isActive={tabActive === 'followers'} onClick={() => setTabActive('followers')}>
        Followers
      </TabButton>
    </div>
  )
}

const TabButton = (
  {
    children,
    isActive,
    onClick
  } : {
    children: any
    isActive: boolean
    onClick(): void
  }
) => {
  return (
    <Button
      className={clsx(
        'text-bodysmall',

        isActive
          ? `
          font-bold
          px-2 pb-3
          border-b-2 border-b-primary-500
          text-primary-500 dark:sm:text-text-100
        `
          : `
          font-medium dark:sm:font-bold
          text-text-300 dark:text-text-400 dark:sm:text-text-100
        `
      )}
      onClick={onClick}
    >
      {() => children}
    </Button>
  )
}

export default Tab

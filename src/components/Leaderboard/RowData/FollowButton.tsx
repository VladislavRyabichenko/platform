import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const FollowButton = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      className
    )}>
      <Button className={clsx(
        'text-caption font-medium text-primary-500',
        'bg-[#2160DC]/10 dark:bg-primary-950',
        'py-[7px]',
        'px-[14px]',
        'rounded-md'
      )}>
        {() => 'Follow'}
      </Button>
    </div>
  )
}

export default FollowButton

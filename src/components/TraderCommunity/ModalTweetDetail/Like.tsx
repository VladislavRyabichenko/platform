import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const Like = ({ isLiked }: { isLiked:boolean }) => {
  return (
    <Button className="flex items-center gap-x-2">
      {() => (
        <>
          <Icon isLiked={isLiked} />
          <p className={clsx(
            'text-caption font-bold',
            isLiked ? 'text-danger-500' : 'text-text-300 dark:text-text-400'
          )}>20 likes</p>
        </>
      )}
    </Button>
  )
}

const Icon = ({ isLiked }: { isLiked:boolean }) => {
  return (
    <svg className={clsx(
      isLiked
        ? 'fill-danger-500 stroke-danger-500'
        : 'stroke-icon-light-500 dark:stroke-icon-500'
    )} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.41203 13.8731C8.18536 13.9531 7.81203 13.9531 7.58536 13.8731C5.65203 13.2131 1.33203 10.4597 1.33203 5.79307C1.33203 3.73307 2.99203 2.06641 5.0387 2.06641C6.25203 2.06641 7.32536 2.65307 7.9987 3.55974C8.67203 2.65307 9.75203 2.06641 10.9587 2.06641C13.0054 2.06641 14.6654 3.73307 14.6654 5.79307C14.6654 10.4597 10.3454 13.2131 8.41203 13.8731Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Like

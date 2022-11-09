import clsx from 'clsx'
import React from 'react'

import Like from './Like'
import RepliesComment from './RepliesComment'
import Share from './Share'

const GroupAction = () => {
  return (
    <div className={clsx(
      'flex items-center justify-between px-7 py-3 border-y',
      'border-y-divider-light-400 dark:border-y-divider-400'
    )}>
      <div className="flex items-center space-x-8">
        <Like isLiked={true} />
        <RepliesComment isReplies={true} />

        <div className="text-bodysmall font-medium text-text-300 dark:text-text-400">
          <p>Posted on August 14, 2022</p>
        </div>
      </div>

      <Share/>
    </div>
  )
}

export default GroupAction

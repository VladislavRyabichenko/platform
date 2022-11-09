import clsx from 'clsx'
import React from 'react'
import Like from './Like'
import RepliesComment from './RepliesComment'
import Share from './Share'

const RepliesItem = ({ id, name, username, replies }:{
  id: string
  name: string
  username: string
  replies: string
}) => {
  return (
    <div className={clsx(
      'flex items-start space-x-4',
      'first:pt-0 last:pb-0',
      'last:border-b-0',
      'py-5',
      'border-b',
      'border-b-divider-light-400 dark:border-b-divider-400'
    )}>
      <Avatar id={id}/>

      <div>
        <div className="flex items-center space-x-1.5">
          <h5 className="text-bodysmall font-bold text-text-400 dark:text-text-100">{name}</h5>
          <p className="text-caption font-medium text-text-200 dark:text-text-400" >{username}</p>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="fill-[#D8D8E0] dark:fill-[#4C4D5F]" cx="2" cy="2" r="2" />
          </svg>
          <p className="text-caption font-medium text-text-200 dark:text-text-400">Aug 14, 22’ at 14:39</p>
        </div>

        <p
          className="text-bodysmall font-normal text-text-400 dark:text-text-200 whitespace-pre-line mt-1"
          dangerouslySetInnerHTML={{ __html: replies }}
        />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-5">
            <Like isLiked={false} />
            <RepliesComment isReplies={true} />
          </div>

          <Share/>
        </div>
      </div>
    </div>
  )
}

const Avatar = ({ id }:{
  id: string
}) => {
  return (
    <img className="mt-2 w-8 h-8" src={require(`assets/trader-community/${id}.png`)} alt=""/>
  )
}

export default RepliesItem

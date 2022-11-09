import clsx from 'clsx'
import React, { useRef } from 'react'

import Avatar from './Avatar'
import Banner from './Banner'
import Like from './Like'
import MoreButton from './MoreButton'
import RepliesComment from './RepliesComment'
import Share from './Share'

interface Props {
  username: string
  time: string
  fullname: string
  avatar: string
  content: string
  isLiked: boolean
  isReplies: boolean,
  isBanner: boolean,
}

const IdeasCard = ({ username, time, fullname, content, avatar, isLiked, isReplies, isBanner }: Props) => {
  const tweetContainerRef = useRef<any>(null)

  const handleButtonDisableTweetDetail = () => {
    tweetContainerRef.current.setAttribute('data-disable-button', true)

    setTimeout(() => {
      tweetContainerRef.current.removeAttribute('data-disable-button')
    }, 1)
  }

  return (
    <>
      <article
        ref={tweetContainerRef}
        className="bg-white dark:bg-surface-500 rounded-xl hover:cursor-pointer"
      >
        {isBanner && (
          <Banner/>
        )}

        <div className={clsx(
          'pt-4',
          'pb-4 sm:pb-5',
          'px-4 sm:px-5',
          'flex',
          'gap-x-3 sm:gap-x-4',
          'items-start'
        )}>
          <Avatar src={avatar} />

          <div>
            <UserProfile
              fullname={fullname}
              username={username}
              time={time}
              onClickMoreButton={handleButtonDisableTweetDetail}
            />
            <p
              onMouseUp={() =>
                window.getSelection()?.toString() === ''
                  ? null
                  : handleButtonDisableTweetDetail()
              }
              className="text-caption font-normal text-text-400 dark:text-text-200 mt-1"
              dangerouslySetInnerHTML={{ __html: content }}
            />

          </div>
        </div>

        <div className={clsx(
          'flex items-center justify-between',
          'px-5',
          'py-2',
          'border-t border-t-divider-light-400 dark:border-t-divider-400'
        )}>
          <div className="flex items-center gap-x-8">
            <Like isLiked={isLiked}/>
            <RepliesComment isReplies={isReplies}/>
          </div>
          <Share onClick={handleButtonDisableTweetDetail}/>
        </div>
      </article>
    </>
  )
}

const UserProfile = ({ fullname, username, time, onClickMoreButton }:{
  fullname: string
  username: string
  time: string
  onClickMoreButton(): void
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-1.5 items-center">
        <h4 className="text-bodysmall font-bold text-text-400 dark:text-text-100">{fullname}</h4>
        <span className="text-caption font-medium text-text-200 dark:text-text-400">@{username}</span>

        <svg className="fill-[#DADADE] dark:fill-[#4C4D5F]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" />
        </svg>

        <span className="text-caption font-medium text-text-200 dark:text-text-400">{time}</span>
      </div>

      <MoreButton onClick={onClickMoreButton}/>
    </div>
  )
}

export default IdeasCard

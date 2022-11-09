import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const ProfileCard = ({ avatar, fullname, username }:{
  avatar: string
  fullname: string
  username: string
}) => {
  return (
    <div className={clsx(
      'w-[220px] border rounded-lg',
      'border-divider-light-400 dark:border-divider-500',
      'py-3 px-4'
    )}>
      <div className="flex items-center justify-between">
        <Avatar src={avatar}/>

        <FollowButton/>
      </div>

      <div className="flex items-center space-x-1 mt-2">
        <h5 className="cursor-text text-bodysmall font-bold text-text-400 dark:text-text-100">{fullname}</h5>
        <p className="cursor-text text-caption font-medium text-text-200 dark:text-text-400">@{username}</p>
      </div>
      <p className="cursor-text text-bodysmall font-medium text-text-300 dark:text-text-400 mt-[2px]">7,921 Followers</p>
    </div>
  )
}

const Avatar = ({ src }:{src:string}) => {
  return (
    <img className="cursor-default w-6 h-6" src={src} alt=""/>
  )
}

const FollowButton = () => {
  return (
    <Button className="flex items-center space-x-1">
      {() => (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33301V12.6663" stroke="#2160DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33203 8H12.6654" stroke="#2160DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-caption font-bold text-primary-500">Follow</p>
        </>
      )}
    </Button>
  )
}

export default ProfileCard

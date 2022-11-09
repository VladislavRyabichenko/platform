import clsx from 'clsx'
import React from 'react'

interface Props {
  src: string
  fullname: string
  username: string
  performance: string
}

const TraderItem = ({ src, fullname, username, performance }: Props) => {
  return (
    <div className={clsx(
      'flex items-center space-x-3',
      'py-4 px-[14px]',
      'border border-divider-light-400 dark:border-divider-500',
      'rounded-lg'
    )}>
      <Avatar src={src}/>

      <div>
        <h4 className="inline text-bodysmall font-bold text-text-400 dark:text-text-100 mr-1">{fullname}</h4>
        <p className="inline text-bodysmall font-medium text-text-200 dark:text-text-400">@{username}</p>

        <p className="text-bodysmall font-bold text-success-500">{performance}</p>
      </div>
    </div>
  )
}

const Avatar = ({ src } : {src:string}) => {
  return (
    <img className="w-8 h-8" src={src} alt=""/>
  )
}

export default TraderItem

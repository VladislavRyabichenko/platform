import clsx from 'clsx'
import React from 'react'

import Verified from 'assets/leaderboard/icon/Verified'

const Name = ({ className, flagClassName, textClassName, textContainerClassName, data }:{
  className?: string
  flagClassName?: string
  textClassName?: string
  textContainerClassName?: string
  data: {
    nation: string
    text: string
    isVerified: boolean
  }
}) => {
  return (
    <div className={clsx(
      'flex items-center gap-x-3',
      className
    )}>
      <img className={clsx('w-[16.8px]', flagClassName)} src={require(`assets/icon/Flags/${data.nation}.png`)} alt=""/>
      <div className={clsx('flex items-center gap-x-1', textContainerClassName)}>
        <p className={clsx('text-bodysmall font-medium text-text-400 dark:text-text-100', textClassName)}>{data.text}</p>
        {data.isVerified && <Verified/>}
      </div>
    </div>
  )
}

export default Name

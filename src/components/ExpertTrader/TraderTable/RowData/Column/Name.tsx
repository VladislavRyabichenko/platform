import clsx from 'clsx'
import React from 'react'

import Verified from 'assets/leaderboard/icon/Verified'

import useResponsive from 'utils/useResponsive'

const Name = ({ className, data }:{
  className?: string
  data: {
    nation: string
    text: string
    isVerified: boolean
  }
}) => {
  const { md, xl } = useResponsive()

  return (
    <div className={clsx(
      className
    )}>
      {(!md || xl) && <img className="w-[16.8px]" src={require(`assets/icon/Flags/${data.nation}.png`)} alt=""/>}

      <div className="flex items-center gap-x-1">
        <p className={clsx(
          'text-caption xl:text-bodysmall',
          'font-bold xl:font-medium',
          'text-text-400 dark:text-text-100'
        )}>{data.text}</p>
        {data.isVerified && <Verified/>}
      </div>
    </div>
  )
}

export default Name

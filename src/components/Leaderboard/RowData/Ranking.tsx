import clsx from 'clsx'
import React from 'react'

const Ranking = ({ className, value }:{
  className?: string
  value: number
}) => {
  return (
    <div className={clsx(
      className
    )}>
      <p className={clsx(
        'text-bodysmall font-bold',
        'text-text-400 dark:text-text-100',
        'min-w-[24px] min-h-[24px] w-fit',
        'text-center'
      )}>
        {value > 3
          ? value
          : (
            <img
              className="w-6 h-6"
              src={selectingTopThree(value)}
              alt=""
            />
          )
        }
      </p>
    </div>
  )
}

const selectingTopThree = (value:number) => {
  switch (value) {
  case 1:
    return require('assets/leaderboard/medals/gold.png')

  case 2:
    return require('assets/leaderboard/medals/silver.png')

  case 3:
    return require('assets/leaderboard/medals/bronze.png')

  default:
    break
  }
}

export default Ranking

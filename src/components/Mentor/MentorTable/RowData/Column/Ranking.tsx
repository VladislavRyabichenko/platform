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
        'text-bodysmall font-bold text-text-400 dark:text-text-100',
        'min-w-[24px] min-h-[24px] w-fit',
        'text-center'
      )}>
        {value}
      </p>
    </div>
  )
}

export default Ranking

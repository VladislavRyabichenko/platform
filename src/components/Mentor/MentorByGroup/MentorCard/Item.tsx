import clsx from 'clsx'
import React from 'react'

const Item = ({ id, title, value, className }:{
  id: string
  title: string
  value: string | number
  className: string
}) => {
  return (
    <div>
      <p className={clsx(
        'text-caption font-medium text-text-200 dark:text-text-400',
        (id === 'profitLoss' || id === 'monthlyProfitLoss') && 'text-left',
        (id === 'winRate' || id === 'noOfTrades') && 'text-right'
      )}>{title}</p>
      <p className={clsx(
        'text-bodysmall font-bold mt-[2px]',
        (id === 'profitLoss' || id === 'monthlyProfitLoss') && 'text-left',
        (id === 'winRate' || id === 'noOfTrades') && 'text-right',
        className
      )}>{value}</p>
    </div>
  )
}

export default Item

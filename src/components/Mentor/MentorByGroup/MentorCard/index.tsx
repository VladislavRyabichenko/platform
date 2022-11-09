import clsx from 'clsx'
import React from 'react'
import Header from './Header'
import Item from './Item'

const MentorCard = ({
  name,
  profitLoss,
  monthlyProfitLoss,
  winRate,
  numberOfTrade,
  isProfit,
  onOpenDetailMentor
}:{
  name: string,
  profitLoss: string,
  monthlyProfitLoss: string,
  winRate: string,
  numberOfTrade: number
  isProfit: boolean
  onOpenDetailMentor(e:any): void
}) => {
  return (
    <div className={clsx(
      'bg-white dark:bg-surface-400 rounded-lg',
      'w-[268px]',
      'px-5 py-4'
    )}>
      <Header onOpenDetailMentor={onOpenDetailMentor} name={name} />

      <div className={clsx(
        'grid grid-cols-[max-content_max-content]',
        'justify-between',
        'gap-y-4',
        'mt-3'
      )}>
        <Item
          id="profitLoss"
          className="text-text-400 dark:text-text-100"
          title="P/L"
          value={profitLoss}
        />
        <Item
          id="winRate"
          className={isProfit ? 'text-success-500' : 'text-danger-500'}
          title="Win Rate"
          value={winRate}
        />
        <Item
          id="monthlyProfitLoss"
          className={isProfit ? 'text-success-500' : 'text-danger-500'}
          title="Monthly P/L" value={monthlyProfitLoss}
        />
        <Item
          id="noOfTrades"
          className="text-text-400 dark:text-text-100"
          title="No. of Trades"
          value={numberOfTrade}
        />
      </div>
    </div>
  )
}

export default MentorCard

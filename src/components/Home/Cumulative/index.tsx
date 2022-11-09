import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'
import CardList from './CardList'

const Cumulative = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'py-4 px-5 rounded-xl',
      'min-w-[300px] desktop:min-w-[364px]',
      className
    )}>
      <h2 className="text-bodymedium font-bold text-text-400 dark:text-text-200 mb-4">Top Cumulative Return / Ticker</h2>

      <div className="flex justify-between p-1 bg-surface-light-500 dark:bg-black/60 rounded-lg mb-6">
        <Button className="py-[6px] w-full text-bodysmall font-medium text-text-200 dark:text-text-400 rounded">
          {() => 'Profit'}
        </Button>
        <Button className={clsx(
          'bg-white dark:bg-surface-400',
          'text-primary-500 dark:text-text-100',
          'py-[6px] w-full text-bodysmall font-medium rounded'
        )}>
          {() => 'Loss'}
        </Button>
      </div>

      <div>
        <CardList icon="apple" stockName="AAPL" companyName="Apple, Inc." valueStock="25,030.67" />
        <CardList icon="ge" stockName="GE" companyName="General Electronic C." valueStock="10,030.67" />
        <CardList icon="nike" stockName="NKE" companyName="Nike, Inc." valueStock="9,030.67" />
      </div>
    </div>
  )
}

export default Cumulative

import clsx from 'clsx'
import React from 'react'

import { useTypedSelector } from 'hooks/useTypeSelector'

const TradeEvaluationStatistic = () => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <div className="relative">
      <img className={clsx(
        'w-[200px] h-[200px] m-auto left-0 right-0',
        'absolute',
        'top-8'
      )} src={require(`./image/${theme}.png`)} />

      <div className="relative text-center top-[152px]">
        <p className="text-bodysmall font-medium text-text-200 dark:text-text-300">Total Cum. Score</p>
        <p className="text-h2 font-bold text-text-500 dark:text-text-100">67</p>
        <p className="text-bodysmall font-normal text-text-200 dark:text-text-400 mt-2">Better than 67% of all trader's performance</p>
      </div>
    </div>
  )
}

export default TradeEvaluationStatistic

import clsx from 'clsx'
import React, { useState } from 'react'

import TradeEvaluationEntry from './TradeEvaluationEntry'
import TradeEvaluationEmotion from './TradeEvaluationEmotion'
import TradeEvaluationStatistic from './TradeEvaluationStatistic'

import Navigation from './Navigation'
import PaginationBullet from './PaginationBullet'

const TradeEvaluation = ({ className }:{
  className: string
}) => {
  const [tradeEvaluation, setTradeEvaluation] = useState(0)

  const prevNav = () => {
    if (tradeEvaluation > 0) {
      return setTradeEvaluation(tradeEvaluation - 1)
    } else {
      return setTradeEvaluation(2)
    }
  }

  const nextNav = () => {
    if (tradeEvaluation < 2) {
      return setTradeEvaluation(tradeEvaluation + 1)
    } else {
      return setTradeEvaluation(0)
    }
  }

  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'py-4 px-5 rounded-xl',
      'relative',
      'desktop:min-w-[364px] h-[348px]',
      className
    )}>
      <div className={clsx(
        'flex justify-between'
      )}>
        <div>
          {/* Title */}
          <h2 className="text-bodymedium font-bold text-text-400 dark:text-text-200">Trade Evaluation</h2>

          {/* Description */}
          {tradeEvaluation !== 0 &&
            <p className="text-caption font-medium text-text-200 dark:text-text-400 mt-[2px]">Evaluated 27% of total trades</p>
          }
        </div>

        <Navigation nextNav={nextNav} prevNav={prevNav} />
      </div>

      {tradeEvaluation === 0 && (
        <TradeEvaluationStatistic/>
      )}
      {tradeEvaluation === 1 && (
        <TradeEvaluationEntry/>
      )}
      {tradeEvaluation === 2 && (
        <TradeEvaluationEmotion/>
      )}

      <PaginationBullet
        tradeEvaluation={tradeEvaluation}
        setTradeEvaluation={setTradeEvaluation}
      />
    </div>
  )
}

export default TradeEvaluation

import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const PaginationBullet = ({ tradeEvaluation, setTradeEvaluation }:{
  tradeEvaluation: number
  setTradeEvaluation(e: number): void
}) => {
  return (
    <div className={clsx(
      'flex gap-x-2',
      'absolute',
      tradeEvaluation === 0 ? 'bottom-5' : 'bottom-2',
      'w-fit',
      'm-auto left-0 right-0'
    )}>
      <BulletButton
        index={0}
        tradeEvaluation={tradeEvaluation}
        onClick={() => setTradeEvaluation(0)}
      />

      <BulletButton
        index={1}
        tradeEvaluation={tradeEvaluation}
        onClick={() => setTradeEvaluation(1)}
      />

      <BulletButton
        index={2}
        tradeEvaluation={tradeEvaluation}
        onClick={() => setTradeEvaluation(2)}
      />
    </div>
  )
}

const BulletButton = ({ index, tradeEvaluation, onClick }:{
  index:number
  tradeEvaluation: number
  onClick(e:number): void
}) => {
  return (
    <Button onClick={onClick}>
      {() => (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className={clsx(
              tradeEvaluation === index
                ? 'fill-primary-500 dark:fill-[#4C4D5F]'
                : 'fill-icon-light-400 dark:fill-[#2C2D43]'
            )}
            cx="4" cy="4" r="4" transform="rotate(-180 4 4)"
          />
        </svg>
      )}
    </Button>
  )
}

export default PaginationBullet

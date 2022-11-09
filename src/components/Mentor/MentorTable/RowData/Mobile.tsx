import clsx from 'clsx'
import React from 'react'

import {
  Ranking,
  Name,
  Followers,
  Performance,
  NumberOfTrade,
  TodayProfitLoss,
  WinRate,
  TotalProfitLoss
} from './Column'

import { Button } from 'components/common'

import { IRowData } from './type'

const Mobile = ({ data }: IRowData) => {
  return (
    <>
      <div className="grid grid-cols-[max-content_auto] gap-x-3">
        {/* Ranking */}
        <Ranking value={data.ranking}/>

        <div className="w-full">
          {/* First */}
          <div className="flex justify-between items-center">
            <div>
              <Name className="w-fit flex items-center gap-x-3" data={data.name} />
              <Followers className="flex items-center justify-start space-x-1 mt-[2px]" value={data.followers} />
            </div>

            <Performance className="w-fit" trend={data.performance} />
          </div>

          {/* Second */}
          <div className="flex justify-between items-center mt-6">
            <NumberOfTrade className="whitespace-nowrap text-center" value={data.numberOfTrade} />
            <TodayProfitLoss className="whitespace-nowrap text-right" data={data.todayPL}/>
          </div>

          <div className="flex justify-between items-center mt-3">
            <WinRate className="whitespace-nowrap text-left" value={data.winRate} />
            <TotalProfitLoss className="whitespace-nowrap text-right" data={data.totalPL} />
          </div>
        </div>
      </div>

      <Button className={clsx(
        'text-caption font-medium text-primary-500',
        'bg-[#2160DC]/10 dark:bg-primary-950',
        'py-[7px]',
        'px-[14px]',
        'rounded-md',
        'w-full',
        'mt-3'
      )}>
        {() => 'Follow'}
      </Button>
    </>
  )
}

export default Mobile

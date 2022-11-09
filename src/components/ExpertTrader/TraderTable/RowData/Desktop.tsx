import React from 'react'

import {
  Ranking,
  Name,
  Performance,
  FollowButton,
  NumberOfTrade,
  WinRate,
  TotalProfitLoss,
  TodayProfitLoss,
  Followers
} from './Column'

import { IRowData } from './type'

const Desktop = ({ data }: IRowData) => {
  return (
    <>
      <Ranking value={data.ranking}/>
      <Name className="flex items-center gap-x-3" data={data.name} />
      <NumberOfTrade className="flex justify-end" value={data.numberOfTrade} />
      <WinRate className="flex justify-end" value={data.winRate} />
      <TotalProfitLoss className="flex items-center justify-end" data={data.totalPL} />
      <TodayProfitLoss className="flex items-center justify-end" data={data.todayPL} />
      <Followers className="flex justify-end" value={data.followers} />
      <Performance className="flex justify-end" trend={data.performance} />
      <FollowButton className="flex justify-end" />
    </>
  )
}

export default Desktop

import React from 'react'

import {
  Avatar,
  Ranking,
  Name,
  Followers,
  Performance,
  FollowButton,
  NumberOfTrade,
  WinRate,
  TotalProfitLoss,
  TodayProfitLoss
} from './Column'

import { IRowData } from './type'

const Tablet = ({ data }: IRowData) => {
  return (
    <>
      {/* Ranking */}
      <Ranking className="w-[5%]" value={data.ranking}/>

      <div className="w-full">
        {/* Top */}
        <div className="w-full grid grid-cols-2">
          <div className="flex items-center space-x-2">
            <Avatar nation={data.name.nation} />
            <div className="space-y-1">
              <Name className="flex space-x-1 items-center" data={data.name} />
              <Followers className="flex space-x-1 items-center" value={data.followers} />
            </div>
          </div>

          <FollowButton className="flex justify-end mr-14" />
        </div>

        {/* Bottom */}
        <div className="w-full grid grid-flow-col auto-cols-min justify-between items-center mt-3">
          <NumberOfTrade className="whitespace-nowrap" value={data.numberOfTrade} />
          <WinRate className="whitespace-nowrap text-center" value={data.winRate} />
          <Performance className="w-fit" trend={data.performance} />
          <TotalProfitLoss className="whitespace-nowrap" data={data.totalPL} />
          <TodayProfitLoss className="whitespace-nowrap" data={data.todayPL} />
        </div>
      </div>
    </>
  )
}

export default Tablet

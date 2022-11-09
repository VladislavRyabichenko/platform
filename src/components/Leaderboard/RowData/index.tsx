import clsx from 'clsx'
import React from 'react'

import Performance from './Performance'
import FollowButton from './FollowButton'
import Ranking from './Ranking'
import Name from './Name'
import NumberOfTrade from './NumberOfTrade'
import WinRate from './WinRate'
import TotalProfitLoss from './TotalProfitLoss'
import TodayProfitLoss from './TodayProfitLoss'
import Followers from './Followers'

import useResponsive from 'utils/useResponsive'
import { Button } from 'components/common'

import { IRowData } from './type'

const RowData = ({ data }: IRowData) => {
  const { xl, md } = useResponsive()

  return (
    <div className={clsx(
      'grid w-full',
      `
      md:grid-cols-[max-content_auto]
      xl:grid-cols-[5%_20%_9%_10%_13.5%_13.5%_7.5%_11.5%_10%]
      `,
      'gap-x-3 xl:gap-x-0',
      'items-start xl:items-center',
      'py-3',
      'first:pt-0',
      'border-b border-b-divider-light-400 dark:border-b-divider-400'
    )}>
      {xl
        ? (
          <Desktop data={data}/>
        )
        : md
          ? (
            <Tablet data={data}/>
          )
          : (
            <Mobile data={data}/>
          )}
    </div>
  )
}

const Desktop = ({ data }: IRowData) => {
  return (
    <>
      <Ranking value={data.ranking}/>
      <Name data={data.name} />
      <NumberOfTrade className="flex justify-end" value={data.numberOfTrade} />
      <WinRate className="flex justify-end" value={data.winRate} />
      <TotalProfitLoss className="flex items-center justify-end" data={data.totalPL} />
      <TodayProfitLoss className="flex items-center justify-end" data={data.todayPL} />
      <Followers className="justify-end" value={data.followers}/>
      <Performance className="flex justify-end" trend={data.performance} />
      <FollowButton className="flex justify-end" />
    </>
  )
}

const Tablet = ({ data }: IRowData) => {
  return (
    <>
      {/* Ranking */}
      <Ranking value={data.ranking}/>

      <div className="w-full">
        {/* Top */}
        <div className="w-full grid grid-cols-2">
          <Name className="w-fit" data={data.name} />

          <div className="flex items-center space-x-3 place-self-end">
            <Followers className="items-center space-x-1" value={data.followers}/>
            <FollowButton className="flex justify-end" />
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full grid grid-flow-col auto-cols-min justify-between items-center mt-3">
          <NumberOfTrade className="whitespace-nowrap" value={data.numberOfTrade} />
          <WinRate className="whitespace-nowrap text-center" value={data.winRate} />
          <Performance className="w-fit" trend={data.performance} />
          <TotalProfitLoss className="whitespace-nowrap" data={data.totalPL}/>
          <TodayProfitLoss className="whitespace-nowrap" data={data.todayPL}/>
        </div>
      </div>
    </>
  )
}

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
              <Followers className="items-center justify-start space-x-1 mt-[2px]" value={data.followers} />
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
        'bg-primary-950',
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

export default RowData

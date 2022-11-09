import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'

import ActionButton from './ActionButton'
import DowndrawnLoosingStreak from './DowndrawnLoosingStreak'
import Expectancy from './Expectancy'
import SelectMonth from './SelectMonth'
import TradingChart from './TradingChart'
import TradingInformation from './TradingInformation'
import TradingStatistic from './TradingStatistic'
import UserInformation from './UserInformation'

const DetailMentor = ({ isOpen, onClose }:{
  isOpen: boolean
  onClose(e:any): void
}) => {
  return (
    <div className={clsx(
      'z-[100]',
      'w-full fixed inset-0 py-10',
      'bg-[#060721]/70',
      'backdrop-blur-[9.5px]',
      'overflow-scroll',
      isOpen ? 'block' : 'hidden'
    )}>
      <div className={clsx(
        'relative',
        'max-w-[1160px] mx-auto',
        'rounded-xl',
        'bg-surface-400',
        'pt-8',
        'pb-10',
        'border border-[#2C2D43]'
      )}>
        <CloseButton
          className="absolute top-3 right-3"
          onClick={onClose}
        />
        <div className={clsx(
          'w-full',
          'flex',
          'justify-between items-center',
          'px-7'
        )}>
          <UserInformation/>
          <ActionButton/>
        </div>

        <div className={clsx(
          'flex justify-between items-start',
          'mt-[66px]',
          'px-7'
        )}>
          <TradingInformation/>
          <SelectMonth/>
        </div>

        <div className="px-7">
          <TradingChart/>
        </div>

        <div className={clsx(
          'grid grid-flow-col auto-cols-max',
          'border-t border-t-divider-500',
          'pt-6',
          'mt-7',
          'px-7',
          'gap-x-6',
          'divide-x divide-divider-500'
        )}>
          <DowndrawnLoosingStreak/>
          <TradingStatistic/>
          <Expectancy/>
        </div>

      </div>
    </div>
  )
}

const CloseButton = ({ className, onClick }:{
  className: string
  onClick(e:any): void
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
    >
      {() => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0013 29.3337C23.3651 29.3337 29.3346 23.3641 29.3346 16.0003C29.3346 8.63653 23.3651 2.66699 16.0013 2.66699C8.63751 2.66699 2.66797 8.63653 2.66797 16.0003C2.66797 23.3641 8.63751 29.3337 16.0013 29.3337Z" fill="white" fillOpacity="0.06"/>
          <path d="M20 12L12 20" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L20 20" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

export default DetailMentor

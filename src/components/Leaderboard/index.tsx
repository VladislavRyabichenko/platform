import clsx from 'clsx'
import React from 'react'

import ButtonConnectBroker from './ButtonConnectBroker'
import ButtonFilter from './ButtonFilter'
import Header from './Header'
import InputSearch from './InputSearch'
import RowData from './RowData'
import Footer from './Footer'

import { useTypedSelector } from 'hooks/useTypeSelector'

const LeaderboardTable = () => {
  const { leaderboard } = useTypedSelector(state => state.leaderboards)

  return (
    <div className={clsx(
      'px-5 xs:px-6',
      'pt-5 xs:pt-4',
      'pb-10'
    )}>

      <div className={clsx(
        'w-full',
        'grid',
        'gap-4',
        'mb-8 xs:mb-4',
        'grid-flow-row xs:grid-flow-col',
        'xs:grid-cols-[max-content_auto]'
      )}>
        <ButtonConnectBroker className="order-2 xs:order-1"/>

        <div className={clsx(
          'w-full',
          'grid grid-flow-col grid-cols-[auto_max-content]',
          'gap-x-2',
          'order-1 xs:order-2'
        )}>
          <InputSearch/>
          <ButtonFilter/>
        </div>
      </div>

      <div className="bg-white dark:bg-surface-400 rounded-xl">
        <Header/>
        <div className={clsx(
          'pt-3 xl:pt-4',
          'px-5'
        )}>
          {leaderboard.map((item, index) => {
            return (
              <RowData key={index} data={item} />
            )
          })}
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default LeaderboardTable

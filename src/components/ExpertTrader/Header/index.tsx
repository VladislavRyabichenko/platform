import clsx from 'clsx'
import React from 'react'
import ButtonFilter from './ButtonFilter'

import ButtonJoinExpertTrader from './ButtonJoinExpertTrader'
import InputSearchExpertTrader from './InputSearchExpertTrader'

const Header = ({ onClick }: {onClick(e:any):void}) => {
  return (
    <div className={clsx(
      'flex items-center justify-between',
      'flex-col-reverse 2xs:flex-row',
      'border-b-2 dark:border-b-2 dark:xl:border-b',
      'border-b-divider-light-400 dark:border-b-divider-400',
      'pb-8 xl:pb-3',
      'mx-5 md:mx-6'
    )}>
      <ButtonJoinExpertTrader onClick={onClick}/>

      <div className={clsx(
        'mb-4 2xs:mb-0',
        'w-full',
        'space-x-3 2xs:space-x-2',
        'flex items-center justify-end'
      )}>
        <InputSearchExpertTrader/>
        <ButtonFilter/>
      </div>
    </div>
  )
}

export default Header

import clsx from 'clsx'
import React from 'react'

import { useTypedSelector } from 'hooks/useTypeSelector'
interface Props {
  icon: string
  stockName: string
  companyName: string
  valueStock: string
}

const CardList = ({ icon, stockName, companyName, valueStock }: Props) => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <div className={clsx(
      'flex gap-x-3 items-center',
      'border-b',
      'border-b-divider-light-400 dark:border-b-divider-500',
      'first:pt-0',
      'py-4'
    )}>
      <div>
        <div className={clsx(
          'border-divider-light-400 dark:border-divider-500',
          'border rounded-full w-10 h-10 flex items-center justify-center'
        )}>
          <img className="w-6 h-6" src={require(`./icon/${theme}/${icon}-icon.png`)} alt=""/>
        </div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div>
          <p className="text-bodymedium font-bold text-text-500 dark:text-text-100">{stockName}</p>
          <p className="text-bodysmall font-medium text-text-200 dark:text-text-400">{companyName}</p>
        </div>
        <div className="">
          <p className="text-bodymedium font-bold text-text-500 dark:text-text-100">{valueStock}</p>
          <div className="flex items-center gap-x-1 justify-end">
            <TrendsDownIcon/>
            <p className="text-bodysmall font-medium text-danger-500">2.47%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const TrendsDownIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 11L8.75 6.25L6.25 8.75L2.5 5" stroke="#E93A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 11H13.5V8" stroke="#E93A6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default CardList

import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'
import { useTypedSelector } from 'hooks/useTypeSelector'

const AccountInfo = () => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <div className={clsx(
      'flex justify-between',
      'space-x-5 pb-5',
      'border-b border-b-divider-light-400 dark:border-b-divider-500'
    )}>
      <div className="w-1/2 space-y-2">
        <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Account Info</h4>
        <p className="text-bodysmall font-bold text-text-200 dark:text-text-500">Connect your account to receive payments</p>
      </div>

      <div className={clsx(
        'border border-divider-light-400 dark:border-divider-500',
        'w-1/2 rounded-lg'
      )}>
        <div className={clsx(
          'px-4 pt-3 pb-4',
          'grid grid-cols-[max-content_auto_max-content] items-center'
        )}>
          <img className="w-12" src={require(`./${theme}/visa.png`)} alt=""/>

          <div className="px-4">
            <p className="text-bodymedium font-bold text-text-400 dark:text-text-100">AmericanExpress</p>
            <p className="text-caption font-medium text-text-200 dark:text-text-400">Expires 06/24</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button className={clsx(
              'text-caption font-medium text-white',
              'h-8 w-[142px]',
              'bg-primary-500 rounded-md'
            )}>{() => 'Transfer to account'}</Button>

            <Button className={clsx(
              'text-caption font-bold text-primary-500',
              'h-8 w-[52px]',
              'bg-[#2160DC]/10 dark:bg-primary-950 rounded-md'
            )}>{() => 'Edit'}</Button>
          </div>
        </div>

        <div className={clsx(
          'px-4 py-2.5',
          'border-t border-divider-light-400 dark:border-t-divider-500'
        )}>
          <p className="text-right text-caption font-medium text-text-200 dark:text-text-500">
            Accumulation Income :
            <span className="font-bold text-text-400 dark:text-text-100 ml-2">$50,395</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo

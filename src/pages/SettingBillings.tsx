import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from 'components/common'
import { Billing, Settings, Subscription } from 'components/SettingBilling'

const SettingBillings = () => {
  const [tabActive, setTabActive] = useState('billing')

  return (
    <div className="pt-4 pb-10 px-6">
      <div className="bg-white dark:bg-surface-400 rounded-xl">
        <div className={clsx(
          'flex',
          'px-8 pt-5 pb-4',
          'space-x-8',
          'border-b border-b-divider-light-400 dark:border-b-divider-500'
        )}>
          <TabButton name="Billing" isActive={tabActive === 'billing'} onClick={() => setTabActive('billing')} />
          <TabButton name="Settings" isActive={tabActive === 'setting'} onClick={() => setTabActive('setting')} />
          <TabButton name="Subscription" isActive={tabActive === 'subscription'} onClick={() => setTabActive('subscription')} />
        </div>

        {tabActive === 'billing' && <Billing/>}
        {tabActive === 'setting' && <Settings/>}
        {tabActive === 'subscription' && <Subscription/>}
      </div>
    </div>
  )
}

const TabButton = ({ name, isActive, onClick }:{
  name: string
  isActive: boolean
  onClick(e?:any): void
}) => {
  return (
    <Button
      className={clsx(
        'px-2',
        'relative',
        'text-bodysmall font-bold',
        isActive
          ? 'text-primary-500 dark:text-text-100'
          : 'text-text-200 dark:text-text-400'
      )}
      onClick={onClick}
    >
      {() => (
        <>
          {name}
          {isActive &&
            <motion.div
              layoutId="borderBottomTabButton"
              className={clsx(
                'absolute bottom-[-17px] left-0',
                'w-full h-0',
                'border-b-2 border-b-primary-500'
              )}
            />
          }
        </>
      )}
    </Button>
  )
}

export default SettingBillings

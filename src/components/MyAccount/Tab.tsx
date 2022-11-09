import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from 'components/common'

const Tab = () => {
  const [isActive, setActive] = useState('my-ideas')

  return (
    <div className="flex items-center space-x-8">
      <TabButton onClick={() => setActive('my-ideas')} isActive={isActive === 'my-ideas'} value="My Ideas" />
      <TabButton onClick={() => setActive('holdings')} isActive={isActive === 'holdings'} value="Holdings" />
      <TabButton onClick={() => setActive('performance')} isActive={isActive === 'performance'} value="Performance" />
      <TabButton onClick={() => setActive('transactions')} isActive={isActive === 'transactions'} value="Transactions" />
      <TabButton onClick={() => setActive('calendar')} isActive={isActive === 'calendar'} value="Calendar" />
      <TabButton onClick={() => setActive('subscription')} isActive={isActive === 'subscription'} value="Subscription" />
    </div>
  )
}

const TabButton = ({ isActive, value, onClick }:{
  isActive: boolean
  value: string
  onClick(value: any): void
}) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        'relative',
        'flex items-start px-2 h-9',
        'text-bodysmall',
        isActive ? 'font-bold text-text-100' : 'font-medium text-text-400'
      )}
    >
      {() => (<>
        {value}
        {isActive && <motion.div layoutId="bottomLineTabMyAccount" className={clsx(
          'absolute w-full',
          'bottom-[-1px] left-0',
          'border-b-2 border-b-primary-500'
        )}/>}
      </>)}
    </Button>
  )
}

export default Tab

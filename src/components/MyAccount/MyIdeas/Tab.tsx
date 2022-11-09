import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from 'components/common'

const Tab = () => {
  const [isActive, setActive] = useState('all')

  return (
    <div className="w-full border-b border-b-divider-400">
      <div className="flex items-center space-x-8">
        <TabButton onClick={() => setActive('all')} isActive={isActive === 'all'} value="All" />
        <TabButton onClick={() => setActive('public')} isActive={isActive === 'public'} value="Public" />
        <TabButton onClick={() => setActive('private')} isActive={isActive === 'private'} value="Private for subscribers only" />
      </div>
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
        'flex items-start px-2 h-8',
        'text-bodysmall',
        isActive ? 'font-bold text-text-100' : 'font-medium text-text-400'
      )}
    >
      {() => (<>
        {value}
        {isActive && <motion.div layoutId="bottomLineTabMyIdeas" className={clsx(
          'absolute w-full',
          'bottom-[-1px] left-0',
          'border-b-2 border-b-primary-500'
        )}/>}
      </>)}
    </Button>
  )
}

export default Tab

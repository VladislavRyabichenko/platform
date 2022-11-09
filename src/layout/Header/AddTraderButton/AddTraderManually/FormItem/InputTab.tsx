import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import { Button } from 'components/common'

const InputTab = ({ id, arrTab, defaulSelected, setInstrumentSelected }:{
  id: string
  defaulSelected: string
  arrTab: {
    id: string,
    value: string
  }[]
  setInstrumentSelected(value: string): void
}) => {
  return (
    <div className={clsx(
      'bg-surface-light-500 dark:bg-black',
      'text-bodysmall font-medium w-fit p-1 rounded-md h-10'
    )}>
      {arrTab.map((tab, index) => {
        return (
          <TabButton
            key={index}
            tabId={id}
            onClick={(newSelected) => setInstrumentSelected(newSelected)}
            defaultSelected={defaulSelected}
            newSelected={tab.id}
            value={tab.value}
          />
        )
      })}
    </div>
  )
}

const TabButton = ({ tabId, newSelected, value, defaultSelected, onClick }:{
  tabId: string
  newSelected: string
  defaultSelected: string
  value: string
  onClick(newSelected: string): void
}) => {
  return (
    <Button
      onClick={() => onClick(newSelected)}
      className={clsx(
        'relative',
        'px-6 h-full',
        defaultSelected === newSelected
          ? 'text-text-400 dark:text-text-100'
          : 'text-text-300 dark:text-text-400'
      )}
    >
      {() => (
        <>
          {defaultSelected === newSelected &&
            <motion.div
              className="rounded absolute bg-white dark:bg-surface-400 w-full h-full top-0 left-0"
              layoutId={tabId}
            />
          }
          <span className="relative">{value}</span>
        </>
      )}
    </Button>
  )
}

export default InputTab

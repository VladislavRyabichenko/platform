import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const AsBecome = () => {
  return (
    <div className="pt-5">
      <p className="text-bodysmall font-bold text-text-300 dark:text-text-400">Me as</p>

      <div className="flex justify-between space-x-5 mt-2">
        <CardItem title="Mentor" amountPackage={5}/>
        <CardItem title="Expert Trader" amountPackage={4}/>
      </div>
    </div>
  )
}

const CardItem = ({ title, amountPackage }:{
  title: string
  amountPackage: number
}) => {
  return (
    <div className={clsx(
      'pt-4 pb-5',
      'border border-divider-light-400 dark:border-divider-500 rounded-lg',
      'max-w-[532px] w-full overflow-hidden'
    )}>
      <div className={clsx(
        'flex items-center justify-between',
        'mx-5 pb-3',
        'border-b border-b-divider-light-400 dark:border-b-divider-500'
      )}>
        <div>
          <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">{title}</h4>
          <p className="text-caption font-medium text-text-200 dark:text-text-400">You have 10 subscribers</p>
        </div>

        <Button className={clsx(
          'h-8 w-[146px]',
          'bg-[#2160DC]/10 dark:bg-primary-950 rounded-md',
          'text-caption font-bold text-primary-500'
        )}>
          {() => 'See subscribers list'}
        </Button>
      </div>

      <div className="pt-3 ml-5">
        <p className="text-caption font-bold text-text-300 dark:text-text-500">{amountPackage} packages</p>

        <div className="grid grid-flow-col gap-x-3 mt-2">
          <ItemPackage id="personal" name="Personal" description="Justo faucibus fames semper ipsum at." />
          <ItemPackage id="essential" name="Esentials+" description="Justo faucibus fames semper ipsum at." />
          <ItemPackage id="personal" name="Business" description="Justo faucibus fames semper ipsum at." />
        </div>
      </div>
    </div>
  )
}

const ItemPackage = ({ id, name, description }:{
  id: string
  name: string
  description: string
}) => {
  return (
    <div className={clsx(
      'relative',
      'pt-4 px-3',
      'w-[180px] h-[176px]',
      'border border-divider-light-400 dark:border-divider-500 rounded-lg'
    )}>
      <p className="text-bodysmall font-bold text-text-400 dark:text-text-100">{name}</p>
      <p className="text-caption font-medium text-text-200 dark:text-text-400 mt-1">{description}</p>

      <div className={clsx(
        'w-[70px] h-6 mt-4',
        'flex justify-center items-center',
        'bg-warning-500 rounded-[32px]'
      )}>
        <p className="text-white dark:text-surface-400">
          <span className="text-bodysmall font-bold">$20/</span>
          <span className="text-caption font-medium">hr.</span>
        </p>

        <img className="absolute right-0 bottom-0 w-[84px]" src={require(`./${id}.png`)} alt=""/>
      </div>
    </div>
  )
}

export default AsBecome

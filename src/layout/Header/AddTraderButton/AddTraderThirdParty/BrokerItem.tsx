import React from 'react'

import { Button } from 'components/common'
import clsx from 'clsx'

const BrokerItem = ({ logoName, brokerName, description }:{
  logoName: string
  brokerName: string
  description: string
}) => {
  return (
    <div className={clsx(
      'grid items-center gap-x-3',
      'grid-cols-[max-content_auto_max-content]'
    )}>
      <Logo name={logoName} />

      <div>
        <h5 className="text-bodysmall font-bold text-text-400 dark:text-text-100">{brokerName}</h5>
        <p className="text-caption font-medium text-text-200 dark:text-text-400 mt-1">{description}</p>
      </div>

      <ButtonConnect/>
    </div>
  )
}

const Logo = ({ name }:{
  name: string
}) => {
  return (
    <div className={clsx(
      'border rounded-full p-2 h-10 w-10',
      'border-divider-light-400 dark:border-divider-500'
    )}>
      <img src={require(`./logo/${name}.png`)} alt=""/>
    </div>
  )
}

const ButtonConnect = () => {
  return (
    <Button className={clsx(
      'h-8 w-[84px]',
      'rounded-[4px]',
      'bg-[#2160DC]/10 dark:bg-primary-950',
      'text-caption font-bold text-primary-500'
    )}>
      {() => 'Connect'}
    </Button>
  )
}

export default BrokerItem

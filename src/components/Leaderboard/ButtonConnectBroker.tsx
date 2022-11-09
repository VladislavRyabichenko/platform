import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const ButtonConnectBroker = ({ className }:{
  className: string
}) => {
  return (
    <Button className={clsx(
      'bg-primary-500 rounded-md',
      'text-bodysmall font-bold text-white',
      'px-6',
      'py-2.5',
      className
    )}>
      {() => 'Connect your Broker'}
    </Button>
  )
}

export default ButtonConnectBroker

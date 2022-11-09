import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const ButtonJoinExpertTrader = ({ onClick }:{
  onClick(e:any): void
}) => {
  return (
    <Button
      className={clsx(
        'text-bodysmall font-bold text-white',
        'rounded-md',
        'bg-primary-500',
        'w-full 2xs:w-[180px]',
        'h-10',
        'flex-none'
      )}
      onClick={onClick}
    >
      {() => 'Join Expert Traders'}
    </Button>
  )
}

export default ButtonJoinExpertTrader

import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const ButtonJoinMentor = ({ onClick }:{
  onClick(e:any): void
}) => {
  return (
    <Button
      className={clsx(
        'text-bodysmall font-bold text-white',
        'rounded-md',
        'bg-primary-500',
        'w-full 2xs:w-[136px]',
        'h-10',
        'flex-none'
      )}
      onClick={onClick}
    >
      {() => 'Join Mentor'}
    </Button>
  )
}

export default ButtonJoinMentor

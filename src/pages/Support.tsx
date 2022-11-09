import clsx from 'clsx'
import React from 'react'

import { Illustration, SupportDropdown } from 'components/Support'

const Supports = () => {
  return (
    <div className={clsx(
      'py-[222px] md:py-[430px] xl:pt-[234px]',
      'xl:pb-[322px]',
      'px-6 w-full h-fit'
    )}>
      <div className={clsx(
        'flex flex-col items-center justify-start w-full h-fit'
      )}>
        <Illustration/>
        <p className="text-bodylarge md:text-h4 font-bold text-text-400 mt-6 md:mt-7">How can we help you?</p>
        <SupportDropdown />
      </div>
    </div>
  )
}

export default Supports

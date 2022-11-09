import clsx from 'clsx'
import React from 'react'

import Performance from './Performance'
import Highest from './Highest'
import Lowest from './Lowest'
import SelectIndex from './SelectIndex'
import SelectPeriodicaly from './SelectPeriodicaly'

const HeaderLabel = () => {
  return (
    <div className={clsx(
      'w-full',
      'flex justify-between items-start mb-8',
      'flex-col-reverse md:flex-row'
    )}>
      <div className="flex mt-6 md:mt-0">
        <Performance className="mr-7 md:mr-[60px]"/>
        <Highest className="mr-7 md:mr-[40px]"/>
        <Lowest/>
      </div>

      <div className="w-full md:w-fit flex gap-x-2">
        <SelectIndex/>
        <SelectPeriodicaly/>
      </div>
    </div>
  )
}

export default HeaderLabel

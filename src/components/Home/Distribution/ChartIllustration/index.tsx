import clsx from 'clsx'
import React from 'react'
import BarChart from './BarChart'
import XLabelLeft from './XLabelLeft'
import XLabelRight from './XLabelRight'
import YLabelCenter from './YLabelCenter'

const ChartIllustration = () => {
  return (
    <svg className={clsx(
      'm-auto left-0 right-0',
      'w-full'
    )} width="346" height="269" viewBox="0 0 346 269" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <XLabelLeft/>

      <g className="stroke-divider-light-500 dark:stroke-divider-500">
        <path d="M309 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M336 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M282 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M255 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M228 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
      </g>

      <XLabelRight/>

      <g className="stroke-divider-light-500 dark:stroke-divider-500">
        <path d="M93 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M120 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M66 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M39 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M12 1V241" strokeLinecap="round" strokeDasharray="6 6"/>
      </g>

      <YLabelCenter/>

      <BarChart/>
    </svg>
  )
}

export default ChartIllustration

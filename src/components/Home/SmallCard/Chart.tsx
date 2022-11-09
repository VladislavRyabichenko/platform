import React from 'react'

import { AreaChart, Area, ReferenceLine } from 'recharts'

interface Props {
  dataKey: 'value' | 'return' | 'currency' | 'rate'
  data?: {
    return?: number
    value?: number
    currency?: number
    rate?:number
  }[]
  isProfit: boolean
}

const ChartArea = ({ dataKey, data, isProfit }: Props) => {
  return (
    <AreaChart
      width={64}
      height={40}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <defs>
        <linearGradient id="gradientProfit" x1="32" y1="0" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7CFFC4" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#7CFFC4" stopOpacity="0"/>
        </linearGradient>

        <linearGradient id="gradientNotProfit" x1="32" y1="2.23138e-07" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E93A6F" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#E93A6F" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <ReferenceLine y={1750} stroke="#2C2D43" strokeDasharray="6 6" />

      <Area type="monotone" dataKey={dataKey} strokeWidth={2} stroke={isProfit ? '#5AC994' : '#E93A6F'} fillOpacity={1} fill={isProfit ? 'url(#gradientProfit)' : 'url(#gradientNotProfit)'} />
    </AreaChart>
  )
}

export default ChartArea

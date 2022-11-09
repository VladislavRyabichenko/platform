import React from 'react'

import { AreaChart, Area, YAxis, XAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts'

import { useTypedSelector } from 'hooks/useTypeSelector'

const Chart = () => {
  const data = [
    {
      return: 140000,
      name: 'Aug 1'
    },
    {
      return: 160000,
      name: 'Aug 2'
    },
    {
      return: 200000,
      name: 'Aug 3'
    },
    {
      return: 200000,
      name: 'Aug 4'
    },
    {
      return: 90000,
      name: 'Aug 5'
    },
    {
      return: 160000,
      name: 'Aug 6'
    },
    {
      return: 150000,
      name: 'Aug 7'
    },
    {
      return: 160000,
      name: 'Aug 8'
    },
    {
      return: 75000,
      name: 'Aug 9'
    },
    {
      return: 80000,
      name: 'Aug 10'
    },
    {
      return: 75000,
      name: 'Aug 11'
    },
    {
      return: 77500,
      name: 'Aug 12'
    },
    {
      return: 70000,
      name: 'Aug 13'
    },
    {
      return: 80000,
      name: 'Aug 14'
    },
    {
      return: 65000,
      name: 'Aug 15'
    },
    {
      return: 70000,
      name: 'Aug 16'
    },
    {
      return: 60000,
      name: 'Aug 17'
    },
    {
      return: 80000,
      name: 'Aug 18'
    },
    {
      return: 75000,
      name: 'Aug 19'
    },
    {
      return: 160000,
      name: 'Aug 20'
    },
    {
      return: 150000,
      name: 'Aug 21'
    },
    {
      return: 220000,
      name: 'Aug 22'
    },
    {
      return: 230000,
      name: 'Aug 23'
    },
    {
      return: 210000,
      name: 'Aug 24'
    },
    {
      return: 240000,
      name: 'Aug 25'
    },
    {
      return: 250000,
      name: 'Aug 26'
    },
    {
      return: 220000,
      name: 'Aug 27'
    },
    {
      return: 210000,
      name: 'Aug 28'
    },
    {
      return: 220000,
      name: 'Aug 29'
    },
    {
      return: 240000,
      name: 'Aug 30'
    }
  ]

  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <>
      <ResponsiveContainer width="100%" height="72.5%">
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid className="stroke-divider-light-500 dark:stroke-divider-400" strokeDasharray="6 6" vertical={false} />
          <YAxis tickCount={6} allowDataOverflow={true} orientation="right" axisLine={false} tickLine={false} fontSize="12px" stroke={theme === 'dark' ? '#444558' : '#B4B5BC'} domain={['dataMin - 1000', 'auto']} />
          <defs>
            <linearGradient id="gradientColor" x1="317" y1="0" x2="317" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2160DC" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#2160DC" stopOpacity="0"/>
            </linearGradient>
          </defs>

          <Area dataKey="return" strokeWidth={3} stroke={'#2160DC'} fillOpacity={1} fill={'url(#gradientColor)'} />

        </AreaChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="27.5%">
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid className="stroke-divider-light-500 dark:stroke-divider-400" strokeDasharray="6 6" vertical={false} />
          <YAxis interval="preserveStartEnd" allowDataOverflow={true} orientation="right" axisLine={false} tickLine={false} fontSize="12px" stroke={theme === 'dark' ? '#444558' : '#B4B5BC'} domain={['dataMin', 'dataMax']} />
          <XAxis allowDataOverflow={true} dataKey="name" axisLine={false} tickLine={false} fontSize="12px" stroke={theme === 'dark' ? '#444558' : '#B4B5BC'} tickMargin={12} domain={['dataMin', 'dataMax']} />
          <defs>
            <linearGradient id="gradientColor" x1="317" y1="0" x2="317" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2160DC" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#2160DC" stopOpacity="0"/>
            </linearGradient>
          </defs>

          <Area dataKey="return" strokeWidth={3} stroke='transparent' fillOpacity={1} fill='transparent' />

          <ReferenceLine stroke="#F2B007" segment={[
            { x: data[0].name, y: data[0].return },
            { x: data[data.length - 1].name, y: data[data.length - 1].return }
          ]} />

        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart

import clsx from 'clsx'
import React from 'react'

const TradingStatistic = () => {
  return (
    <div className="pl-6">
      <p className="text-bodysmall font-bold text-text-400">Trading Statistics</p>

      <div className="grid grid-cols-[159px_194px] mt-5 gap-x-4">
        <ul className="space-y-3">
          <ListItem
            title="Trades"
            amount={{
              value: '51',
              type: 'profit'
            }}
          />
          <ListItem
            title="Win Trades"
            amount={{
              secondValue: '21',
              value: '81.07%',
              type: 'profit'
            }}
          />
          <ListItem
            title="Loss Trades"
            amount={{
              secondValue: '50',
              value: '81.07%',
              type: 'loss'
            }}
          />
          <ListItem
            title="Avg. Profit"
            amount={{
              value: '2,309.12',
              type: 'profit'
            }}
          />
          <ListItem
            title="Avg. Loss"
            amount={{
              value: '1,890.30',
              type: 'loss'
            }}
          />
          <ListItem
            title="Largest Profit"
            amount={{
              value: '15,390.90',
              type: 'profit'
            }}
          />
          <ListItem
            title="Largest Loss"
            amount={{
              value: '11,551.11',
              type: 'loss'
            }}
          />
        </ul>

        <ul className="space-y-3">
          <ListItem
            title="Profit"
            amount={{
              value: '61,743.20',
              type: 'normal'
            }}
          />
          <ListItem
            title="Win/Loss Ratio"
            amount={{
              value: '0.20:1',
              type: 'normal'
            }}
          />
          <ListItem
            title="Profit Loss (Edge) Ratio"
            amount={{
              value: '1.46:1',
              type: 'normal'
            }}
          />
          <ListItem
            title="Adjusted Profit Loss Ratio"
            amount={{
              value: '1.46:1',
              type: 'normal'
            }}
          />
          <ListItem
            title="Avg. Holding on Winners"
            amount={{
              value: '1.46:1',
              type: 'normal'
            }}
          />
          <ListItem
            title="Avg. Holding on Lossers"
            amount={{
              value: '1.46:1',
              type: 'normal'
            }}
          />
          <ListItem
            title="Avg. Holding Days"
            amount={{
              value: '1.46:1',
              type: 'normal'
            }}
          />
        </ul>
      </div>
    </div>
  )
}

const ListItem = ({ title, amount }:{
  title: string
  amount: {
    secondValue?: string
    value: string
    type: string
  }
}) => {
  return (
    <li className="flex items-center justify-between">
      <p className="text-caption font-medium text-text-400">{title}</p>
      <p className={clsx(
        'text-caption font-bold',
        amount.type === 'profit' && 'text-success-500',
        amount.type === 'loss' && 'text-danger-500',
        amount.type === 'normal' && 'text-text-100'
      )}><span className="text-text-100">{amount.secondValue}</span> {amount.value}</p>
    </li>
  )
}

export default TradingStatistic

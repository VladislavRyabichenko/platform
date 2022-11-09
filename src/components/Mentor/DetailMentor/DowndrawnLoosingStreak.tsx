import clsx from 'clsx'
import React from 'react'

const DowndrawnLoosingStreak = () => {
  return (
    <div className="w-[320px]">
      <p className="text-bodysmall font-bold text-text-300">Downdrawn & Loosing Streak</p>

      <ul className="space-y-3 mt-7">
        <ListItem
          title="Max Drawdown"
          amount={{
            value: '9,850.43',
            type: 'normal'
          }}
          percentage={{
            value: '81.07%',
            type: 'profit'
          }}
        />
        <ListItem
          title="Consecutive Losses"
          amount={{
            value: '9,850.43',
            type: 'loss'
          }}
          percentage={{
            value: '81.07%',
            type: 'loss'
          }}
        />
        <ListItem
          title="Consecutive Wins"
          amount={{
            value: '9,850.43',
            type: 'profit'
          }}
          percentage={{
            value: '81.07%',
            type: 'profit'
          }}
        />
        <ListItem
          title="Max Consecutive Profit"
          amount={{
            value: '9,850.43',
            type: 'profit'
          }}
          percentage={{
            value: '81.07%',
            type: 'profit'
          }}
        />
        <ListItem
          title="Max Consecutive Losses"
          amount={{
            value: '9,850.43',
            type: 'loss'
          }}
          percentage={{
            value: '81.07%',
            type: 'loss'
          }}
        />
      </ul>
    </div>
  )
}

const ListItem = ({ title, amount, percentage }:{
  title:string
  amount:{
    value:string
    type:string
  }
  percentage:{
    value:string
    type:string
  }
}) => {
  return (
    <li className="grid grid-cols-[minmax(0%,100%)_max-content_max-content]">
      <p className="text-caption font-medium text-text-400">
        {title}
      </p>
      <p className={clsx(
        'text-caption font-bold',
        amount.type === 'normal' && 'text-text-100',
        amount.type === 'profit' && 'text-success-500',
        amount.type === 'loss' && 'text-danger-500'
      )}>
        {amount.value}
      </p>
      <p className={clsx(
        'text-caption font-bold',
        'ml-2',
        percentage.type === 'normal' && 'text-text-100',
        percentage.type === 'profit' && 'text-success-500',
        percentage.type === 'loss' && 'text-danger-500'
      )}>
        {percentage.value}
      </p>
    </li>
  )
}

export default DowndrawnLoosingStreak

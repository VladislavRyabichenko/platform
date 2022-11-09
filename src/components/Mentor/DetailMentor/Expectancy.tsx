import React from 'react'

const Expectancy = () => {
  return (
    <div className="w-[319px] pl-6">
      <p className="text-bodysmall font-bold text-text-300">Expectancy (R Multiple)</p>

      <ul className="space-y-3 mt-5">
        <ListItem
          title="R- Multiple Avg. expetancy per Trade"
          description="0.09 R"
        />
        <ListItem
          title="R- Multiple Adjusted RRR"
          description="1.03"
        />
        <ListItem
          title="Request win rate % to breakdown"
          description="40.00"
        />
        <ListItem
          title="Req. WIn rate % for profit factor ore trade"
          description="1.03"
        />
        <ListItem
          title="Planned RRR"
          description="0.24"
        />
      </ul>
    </div>
  )
}

const ListItem = ({ title, description }:{
  title: string
  description: string
}) => {
  return (
    <li className="flex justify-between items-center">
      <p className="text-caption font-medium text-text-400">{title}</p>
      <p className="text-caption font-medium text-text-100">{description}</p>
    </li>
  )
}

export default Expectancy

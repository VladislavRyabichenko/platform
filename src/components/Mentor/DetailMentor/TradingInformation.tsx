import React from 'react'

const TradingInformation = () => {
  return (
    <div className="grid grid-flow-col auto-cols-max">
      <Item
        className="mr-[52px]"
        title="Trading Performance"
        value={
          <>
            1,814.80 <TrendUp/> <span className="text-caption font-bold text-success-500">2,3%</span>
          </>
        }
      />
      <Item
        className="mr-[39px]"
        title="Highest P/L"
        value="2,390"
      />
      <Item
        className="mr-[28px]"
        title="Lowest P/L"
        value="1,126"
      />
      <Item
        className="mr-[48px]"
        title="Winning (%)"
        value="78%"
      />
      <Item
        className=""
        title="# of Followers"
        value="506"
      />
    </div>
  )
}

const Item = ({ className, title, value }:{
  className: string
  title: string
  value: string | React.ReactNode
}) => {
  return (
    <div className={className}>
      <p className="text-bodysmall font-medium text-text-400">{title}</p>
      <p className="text-h4 font-bold text-text-100 mt-1">
        {value}
      </p>
    </div>
  )
}

const TrendUp = () => {
  return (
    <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 5L8.75 9.75L6.25 7.25L2.5 11" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 5H13.5V8" stroke="#5AC994" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default TradingInformation

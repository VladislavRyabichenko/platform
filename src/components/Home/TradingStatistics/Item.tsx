import clsx from 'clsx'
import React from 'react'

interface Props {
  isProfit: boolean
  value: string
  label: string
  circle: React.FunctionComponent
  description: string
}

const Item = ({ isProfit, label, value, circle: Circle, description }: Props) => {
  return (
    <div className="flex items-center gap-x-5">
      <div className="relative w-[132px] h-[132px]">
        <Circle/>

        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit">
          <p className="text-text-200 dark:text-text-400 text-caption font-medium">{label}</p>
          <p className={clsx(
            'text-center',
            'text-h4 font-bold tracking-[0.2]',
            isProfit ? 'text-success-500' : 'text-danger-500'
          )}>{value}</p>
        </div>
      </div>

      <p className="text-text-200 dark:text-text-400 text-caption font-medium">{description}</p>
    </div>
  )
}

export default Item

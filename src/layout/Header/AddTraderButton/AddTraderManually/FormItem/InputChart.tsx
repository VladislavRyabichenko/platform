import clsx from 'clsx'
import React from 'react'

const InputChart = () => {
  return (
    <div className={clsx(
      'flex flex-col items-center',
      'border border-dashed',
      'border-divider-light-500 dark:border-divider-500',
      'pt-7 pb-6',
      'rounded-xl'
    )}>
      <DropIcon/>
      <div className="mt-3">
        <h3 className="text-center text-bodysmall font-bold text-text-400 dark:text-text-100">Drop chart here</h3>
        <p className="text-center text-caption font-medium text-text-300 dark:text-text-400 mt-1">
        or click <a href="#" className="text-primary-500 font-bold">here</a> to browse file
        </p>
      </div>
    </div>
  )
}

const DropIcon = () => {
  return (
    <svg className="fill-[#D8D8E0] dark:fill-[#4C4D5F]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333ZM8 20H5.33333V12H8V20ZM13.3333 20H10.6667V5.33333H13.3333V20ZM18.6667 20H16V9.33333H18.6667V20Z" />
    </svg>
  )
}

export default InputChart

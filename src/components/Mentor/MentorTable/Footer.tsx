import React, { useState } from 'react'

import { Button } from 'components/common'
import clsx from 'clsx'

const Footer = () => {
  return (
    <div className={clsx(
      'flex justify-between items-start',
      'pt-6 pb-5',
      'px-5'
    )}>
      <div>
        <p className="text-caption text-text-400 font-medium">
          Showing
          <span className="font-bold text-text-300"> 25 </span>
          result from
          <span className="font-bold text-text-300"> 1,480</span>
        </p>
      </div>

      <Pagination/>
    </div>
  )
}

const Pagination = () => {
  const [paginationActive, setPaginationActive] = useState(1)

  return (
    <div className="flex items-center">
      <PrevButton/>
      <div className={clsx(
        'flex items-center',
        'space-x-1',
        'mx-4'
      )}>
        <PaginationButton onClick={() => setPaginationActive(1)} isActive={paginationActive === 1} value="1" className=""/>
        <PaginationButton onClick={() => setPaginationActive(2)} isActive={paginationActive === 2} value="2" className=""/>
        <PaginationButton onClick={() => setPaginationActive(3)} isActive={paginationActive === 3} value="3" className=""/>
        <PaginationButton onClick={() => setPaginationActive(4)} isActive={paginationActive === 4} value="4" className=""/>
        <PaginationButton value="..." className=""/>
        <PaginationButton onClick={() => setPaginationActive(20)} isActive={paginationActive === 20} value="20" className=""/>
        <PaginationButton onClick={() => setPaginationActive(21)} isActive={paginationActive === 21} value="21" className=""/>
        <PaginationButton onClick={() => setPaginationActive(22)} isActive={paginationActive === 22} value="22" className=""/>
        <PaginationButton onClick={() => setPaginationActive(23)} isActive={paginationActive === 23} value="23" className=""/>
      </div>
      <NextButton/>
    </div>
  )
}

const PaginationButton = ({ isActive, value, className, onClick }:{
  isActive?: boolean
  value: string
  className: string
  onClick?(e:any): void
}) => {
  return (
    <Button
      className={clsx(
        'text-caption rounded-full',
        'w-5 h-5',
        isActive ? 'bg-surface-300 text-text-100 font-medium' : 'bg-transparent text-text-500 font-bold',
        className
      )}
      onClick={onClick}
    >
      {() => value}
    </Button>
  )
}

const PrevButton = () => {
  return (
    <Button className="pr-4 border-r border-r-divider-500">
      {() => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4L6 8L10 12" stroke="#4C4D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

const NextButton = () => {
  return (
    <Button className="pl-4 border-l border-l-divider-500">
      {() => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#4C4D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

export default Footer

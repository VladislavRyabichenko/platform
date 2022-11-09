import clsx from 'clsx'
import React from 'react'

import Button from 'components/common/Button'

const Item = ({ icon: Icon, title, description }:{
  icon:any
  title:string
  description:string
}) => {
  return (
    <Button
      className={clsx(
        'flex items-center justify-between',
        'text-left text-bodysmall font-bold text-text-100'
      )}
    >
      {({ isHover }) => (
        <>
          <div className="flex items-center space-x-2.5">
            <Icon/>
            <div className="space-y-1">
              <p className="text-bodysmall font-bold text-text-100">{title}</p>
              <p className="text-caption font-medium text-text-400">{description}</p>
            </div>
          </div>
          {isHover && <ArrowIcon/>}
        </>
      )}
    </Button>
  )
}

const ArrowIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33203 8H12.6654" stroke="#696A79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3.33301L12.6667 7.99967L8 12.6663" stroke="#696A79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Item

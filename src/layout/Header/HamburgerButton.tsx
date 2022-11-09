import React from 'react'

import { Button } from 'components/common'

const HamburgerButton = ({ className }: {
  className: string
}) => {
  return (
    <Button className={className}>
      {() => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21" stroke="#999AA9" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 12H21" stroke="#999AA9" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 17H21" stroke="#999AA9" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </Button>
  )
}

export default HamburgerButton

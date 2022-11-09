import React from 'react'

import { Button } from 'components/common'

const Navigation = ({ prevNav, nextNav }:{
  prevNav(): void
  nextNav(): void
}) => {
  return (
    <div className="flex gap-x-3 items-center">
      {/* Prev */}
      <Button onClick={() => prevNav()}>
        {() => (
          <svg className="stroke-icon-light-400 dark:stroke-text-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4L6 8L10 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </Button>

      {/* Next */}
      <Button onClick={() => nextNav()}>
        {() => (
          <svg className="stroke-icon-light-400 dark:stroke-text-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </Button>
    </div>
  )
}

export default Navigation

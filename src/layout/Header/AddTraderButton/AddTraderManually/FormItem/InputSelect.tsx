import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const InputSelect = ({ value }:{
  value?: string
}) => {
  return (
    <Button className={clsx(
      'flex justify-between items-center h-10 px-3 w-full rounded-md',
      'bg-surface-light-500 dark:bg-white/[0.06]'
    )}>
      {() => (
        <>
          <p className="text-bodysmall font-medium text-text-200 dark:text-white">{value}</p>

          <svg className="stroke-[#B4B5BC] dark:stroke-[#444558]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7L8 11L12 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </>
      )}
    </Button>
  )
}

export default InputSelect

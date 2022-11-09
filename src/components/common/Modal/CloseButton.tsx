import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

const CloseButton = ({ className, onClose }:{
  className?: string
  onClose?(e: any): void
}) => {
  return (
    <Button
      onClick={onClose}
      className={clsx(
        'absolute top-5 right-5 z-10',
        className
      )}
    >
      {() => (
        <>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-[#F0F0F5] dark:fill-white/[0.06]" d="M14.0013 27.3337C21.3651 27.3337 27.3346 21.3641 27.3346 14.0003C27.3346 6.63653 21.3651 0.666992 14.0013 0.666992C6.63751 0.666992 0.667969 6.63653 0.667969 14.0003C0.667969 21.3641 6.63751 27.3337 14.0013 27.3337Z" />
            <path className="stroke-[#999AA9] dark:stroke-[#70717F]" d="M18 10L10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path className="stroke-[#999AA9] dark:stroke-[#70717F]" d="M10 10L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </>
      )}
    </Button>
  )
}

export default CloseButton

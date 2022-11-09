import clsx from 'clsx'
import React from 'react'

const Performance = ({ className, trend }:{
  className: string
  trend: string
}) => {
  return (
    <div className={clsx(
      className
    )}>
      {trend === 'up'
        ? (
          <svg width="77" height="25" viewBox="0 0 77 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.5L1 13V25H76V5.5L71 13L66 5.5L61 8L56 1L51 13L46 5.5L41 9.5L36 8L31 14.5L26 13L21 15L16 5.5L11 11.5L6 8.5Z" fill="url(#paint0_linear_5633_109661)"/>
            <path d="M1 13L6 8.5L11 11.5L16 5.5L21 15L26 13L31 14.5L36 8L41 9.5L46 5.5L51 13L56 1L61 8L66 5.5L71 13L76 5.5" stroke="#5AC994" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_5633_109661" x1="38.5" y1="1" x2="38" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5AC994" stopOpacity="0.2"/>
                <stop offset="1" stopColor="#5AC994" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        )
        : (
          <svg width="77" height="25" viewBox="0 0 77 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.5L1 13V25H76V5.5L71 13L66 5.5L61 8L56 1L51 13L46 5.5L41 9.5L36 8L31 14.5L26 13L21 15L16 5.5L11 11.5L6 8.5Z" fill="url(#paint0_linear_5761_97427)"/>
            <path d="M1 13L6 8.5L11 11.5L16 5.5L21 15L26 13L31 14.5L36 8L41 9.5L46 5.5L51 13L56 1L61 8L66 5.5L71 13L76 5.5" stroke="#E93A6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_5761_97427" x1="38.5" y1="1" x2="38" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E93A6F" stopOpacity="0.2"/>
                <stop offset="1" stopColor="#E93A6F" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        )}
    </div>
  )
}

export default Performance

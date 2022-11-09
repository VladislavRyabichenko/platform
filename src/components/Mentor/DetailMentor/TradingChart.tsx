import clsx from 'clsx'
import React from 'react'

const TradingChart = () => {
  return (
    <div className={clsx(
      'grid grid-flow-col auto-cols-max gap-x-3',
      'mt-8'
    )}>
      <div>
        <IllustrationChart/>
        <Xlabel/>
      </div>
      <Ylabel/>
    </div>
  )
}

const Ylabel = () => {
  return (
    <div className={clsx(
      'relative',
      'grid grid-flow-row auto-rows-max',
      'text-caption font-medium text-text-500',
      'top-[-6px]'
    )}>
      <p>28,000.00</p>
      <p className="mt-[29px]">21,000.00</p>
      <p className="mt-[29px]">14,000.00</p>
      <p className="mt-[29px]">7,000.00</p>
      <p className="mt-[25px]">28,000.00</p>
      <p className="mt-[33px]">28,000.00</p>
    </div>
  )
}

const Xlabel = () => {
  return (
    <div className={clsx(
      'grid gap-x-8',
      'grid-flow-col auto-cols-max',
      'text-caption font-medium text-text-500',
      'mt-3'
    )}>
      <p>August 1</p>
      <p>August 5</p>
      <p>August 10</p>
      <p>August 15</p>
      <p>August 20</p>
      <p>August 1</p>
      <p>August 25</p>
      <p>August 5</p>
      <p>August 10</p>
      <p>August 15</p>
      <p>August 20</p>
      <p>August 25</p>
    </div>
  )
}

const IllustrationChart = () => {
  return (
    <svg width="1034" height="227" viewBox="0 0 1034 227" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 226H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M2 181H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M2 136H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M2 46H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M2 91H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M2 1H1032" stroke="#2C2D43" strokeLinecap="round" strokeDasharray="6 6"/>
      <path d="M48.8182 76.708L2 95.2124V177H1032V27L985.182 34.6195L938.364 85.4159L891.546 76.708L844.727 119.522L797.909 110.814L751.091 150L704.273 135.124L657.455 139.841L610.636 110.814L563.818 135.124L517 119.522L470.182 128.23L423.364 110.814L376.545 128.23L329.727 76.708L282.909 85.4159L236.091 76.708L189.273 110.814L142.455 101.743L95.6364 119.522L48.8182 76.708Z" fill="url(#paint0_linear_1288_4580)"/>
      <path d="M2 95.2124L25.4091 85.9602L48.8182 76.708L72.2273 98.115L95.6364 119.522L119.045 110.633L142.455 101.743L165.864 106.279L189.273 110.814L212.682 93.7611L236.091 76.708L259.5 81.0619L282.909 85.4159L306.318 81.0619L329.727 76.708L353.136 102.469L376.545 128.23L399.955 119.522L423.364 110.814L446.773 119.522L470.182 128.23L493.591 123.876L517 119.522L540.409 127.323L563.818 135.124L587.227 122.969L610.636 110.814L634.046 125.327L657.455 139.841L680.864 137.482L704.273 135.124L727.682 142.562L751.091 150L774.5 130.407L797.909 110.814L821.318 115.168L844.727 119.522L868.136 98.115L891.546 76.708L914.955 81.0619L938.364 85.4159L961.773 60.0177L985.182 34.6195L1008.59 30.8097L1032 27" stroke="#2160DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 215L1032 175" stroke="#F2B007"/>
      <defs>
        <linearGradient id="paint0_linear_1288_4580" x1="517" y1="27" x2="517" y2="177" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2160DC" stopOpacity="0.4"/>
          <stop offset="1" stopColor="#2160DC" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TradingChart

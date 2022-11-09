import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full pl-4 pt-6 pb-5">
      <p className="max-w-[120px] text-bodysmall font-bold text-white">Get 10% discount for first user</p>

      <button className="text-bodysmall font-bold text-white tracking-[0.2] mt-4">
        Try Now
      </button>

      <img className="absolute m-auto top-0 bottom-0 right-2 w-[106px]" src={require('assets/banner.png')} alt=""/>

      <Background/>
    </div>
  )
}

const Background = () => {
  return (
    <svg className="absolute m-auto top-0 left-0 right-0 z-[-1] w-full" width="228" height="116" viewBox="0 0 228 116" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 12.8716C0 5.91343 5.89893 0.41396 12.84 0.901055L216.84 15.2168C223.126 15.658 228 20.886 228 27.1874V104C228 110.627 222.627 116 216 116H12C5.37258 116 0 110.627 0 104V12.8716Z" fill="url(#paint0_linear_4883_106317)"/>
      <defs>
        <linearGradient id="paint0_linear_4883_106317" x1="152.5" y1="-91.5" x2="49.5235" y2="133.005" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8FE8FA"/>
          <stop offset="1" stopColor="#0C5DFF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Banner

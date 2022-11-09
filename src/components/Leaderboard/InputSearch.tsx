import clsx from 'clsx'
import React, { useState } from 'react'

const InputSearch = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className={clsx(
      'justify-self-end',
      'w-full',
      'xs:max-w-[259px]',
      'h-[40px]',
      'px-3',
      'py-2.5',
      'bg-[#EBEBEF] dark:bg-white/[0.06]',
      'flex items-center space-x-2',
      'rounded-md',
      'border',
      'transition-all duration-300',
      isFocus ? 'border-black/20 dark:border-white/60' : 'border-transparent'
    )}>
      <SearchIcon/>
      <input
        onFocus={() => {
          setIsFocus(true)
        }}
        onBlur={() => {
          setIsFocus(false)
        }}
        className={clsx(
          'w-full',
          'bg-transparent',
          'text-bodysmall font-medium',
          'placeholder:text-text-200 dark:placeholder:text-text-500',
          'text-black/60 dark:text-white',
          'focus:outline-none'
        )}
        placeholder="Search trades..."
      />
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0016 13.9996L11.1016 11.0996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default InputSearch

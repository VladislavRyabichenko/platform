import clsx from 'clsx'
import React, { useState } from 'react'

const InputSearch = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <div className={clsx(
      'flex items-center gap-x-2',
      'px-4 py-2',
      'bg-white dark:bg-surface-400',
      'w-full',
      'rounded-md',
      'border',
      isFocus ? 'border-white/60' : 'border-transparent'
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
          'focus:outline-none',
          'text-black/60 dark:text-white',
          'placeholder:text-text-200 dark:placeholder:text-text-500',
          'text-bodysmall font-medium'
        )}
        placeholder="Find tweet, people or #hashtags..."
      />
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg className="stroke-icon-light-500 dark:stroke-icon-500" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.56393 12.6667C11.79 12.6667 14.4052 10.2789 14.4052 7.33333C14.4052 4.38781 11.79 2 8.56393 2C5.33788 2 2.72266 4.38781 2.72266 7.33333C2.72266 10.2789 5.33788 12.6667 8.56393 12.6667Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8637 13.9996L12.6875 11.0996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default InputSearch

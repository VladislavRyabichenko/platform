import clsx from 'clsx'
import React, { useState } from 'react'

const SearchInput = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className={clsx(
      'flex justify-between items-center',
      'bg-surface-light-500 dark:bg-white/[0.06]',
      'rounded-md',
      'px-3',
      'h-10',
      'space-x-2',
      'border',
      isFocus ? 'border-black/60 dark:border-white/60' : 'border-transparent'
    )}>
      <SearchIcon/>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={clsx(
          'w-full',
          'bg-transparent',
          'text-bodysmall font-medium',
          'text-black/60 dark:text-white',
          'placeholder:text-text-200 dark:placeholder:text-text-500',
          'focus:outline-none'
        )}
        placeholder="Search broker..."
      />
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="fill-[#999AA9] dark:fill-[#4C4D5F] stroke-[#999AA9] dark:stroke-[#4C4D5F]" d="M12.6826 11.5899C13.4917 10.5093 13.8702 9.16508 13.7423 7.81912C13.6115 6.4437 12.9617 5.16976 11.925 4.25645C10.8883 3.34314 9.54263 2.85907 8.1617 2.90271C6.78077 2.94636 5.46834 3.51444 4.49139 4.49139C3.51444 5.46834 2.94636 6.78077 2.90271 8.1617C2.85907 9.54263 3.34314 10.8883 4.25645 11.925C5.16976 12.9617 6.4437 13.6115 7.81912 13.7423C9.16524 13.8703 10.5096 13.4916 11.5902 12.6823L15.1151 16.2072C15.1151 16.2072 15.1151 16.2072 15.1151 16.2072C15.2599 16.3521 15.4564 16.4335 15.6612 16.4336C15.8661 16.4337 16.0626 16.3524 16.2075 16.2076C16.3524 16.0628 16.4339 15.8663 16.434 15.6614C16.434 15.4566 16.3527 15.2601 16.2079 15.1151L16.2079 15.1151L12.6826 11.5899ZM11.0915 11.0909C10.3602 11.8223 9.36817 12.2332 8.33383 12.2332C7.29949 12.2332 6.30751 11.8223 5.57611 11.0909C4.84472 10.3595 4.43383 9.36751 4.43383 8.33316C4.43383 7.29882 4.84472 6.30684 5.57611 5.57545C6.30751 4.84405 7.29949 4.43316 8.33383 4.43316C9.36817 4.43316 10.3602 4.84405 11.0915 5.57545C11.8229 6.30684 12.2338 7.29882 12.2338 8.33316C12.2338 9.36751 11.8229 10.3595 11.0915 11.0909Z" strokeWidth="0.2"/>
    </svg>
  )
}

export default SearchInput

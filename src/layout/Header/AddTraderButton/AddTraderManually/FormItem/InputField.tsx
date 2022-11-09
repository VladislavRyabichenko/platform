import clsx from 'clsx'
import React from 'react'

const InputField = ({ placeholder }:{
  placeholder?: string
}) => {
  return (
    <input
      className={clsx(
        'rounded-md',
        'bg-surface-light-500 dark:bg-white/[0.06]',
        'h-10 px-3 block w-full',
        'text-bodysmall font-medium',
        'text-black/60 dark:text-white/60',
        'placeholder:text-text-200 dark:placeholder:text-text-500',
        'border-none outline-none',
        'focus:outline-black/20 dark:focus:outline-white/60 focus:outline-1'
      )}
      placeholder={placeholder}
    />
  )
}

export default InputField

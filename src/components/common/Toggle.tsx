import clsx from 'clsx'
import React from 'react'

const Toggle = ({ id, isChecked, onChange, className }:{
  id: string
  isChecked: boolean,
  onChange(e: any): void,
  className?:{
    label: string,
    input: string,
    inputPeer: string
  }
}) => {
  return (
    <label htmlFor={id} className={clsx(
      'inline-flex relative items-center cursor-pointer',
      className?.label
    )}>
      <input
        type="checkbox" id={id}
        className={clsx(
          'sr-only peer',
          className?.input
        )}
        checked={isChecked}
        onChange={onChange}
      />
      <div className={clsx(
        'w-[52px] h-8',
        'bg-black/[32%] dark:bg-gray-700',
        'peer-checked:bg-blue-600',
        'relative',
        'p-1',
        'rounded-full peer',
        'peer-checked:after:translate-x-[20px]',
        'peer-checked:after:border-white',
        'dark:after:bg-black after:bg-white',
        "after:content-[''] after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600",
        'after:absolute',
        className?.inputPeer
      )}></div>
    </label>
  )
}

export default Toggle

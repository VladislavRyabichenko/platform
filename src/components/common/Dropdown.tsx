import clsx from 'clsx'
import React, { useState } from 'react'

import Button from './Button'
import useCloseClickOutside from 'utils/useCloseClickOutside'

const Dropdown = ({ data, selected, className, setSelected }:{
  data: {
    id: string
    text: string
  }[]
  selected: {
    id: string
    text: string
  }
  className?: {
    rootContainer?: string
    dropdownButton?: string
    dropdownContainer?: string
    dropdownItemButton?: string
  }
  setSelected(e: any): void
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToogle = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  }

  const refContainer = useCloseClickOutside(() => setIsOpen(false))

  return (
    <div ref={refContainer} className={className?.rootContainer}>
      <Button
        className={clsx(
          'text-caption font-medium',
          'text-text-400 dark:text-text-300',
          'flex items-center gap-x-2',
          'border rounded-md',
          'border-divider-light-400 dark:border-divider-400',
          'py-2.5',
          'pl-4 pr-3',
          'h-fit',
          className?.dropdownButton
        )}
        onClick={handleToogle}
      >
        {() => (
          <>
            {selected.text}
            <ArrowIcon isOpen={isOpen}/>
          </>
        )}
      </Button>

      <div className={clsx(
        'absolute',
        'bg-white dark:bg-surface-400',
        'border',
        'border-divider-light-400 dark:border-divider-500',
        'rounded-[10px]',
        'py-4',
        'px-5',
        'mt-2.5',
        'transition-transform duration-300',
        'transform',
        className?.dropdownContainer,
        isOpen
          ? 'translate-y-0 opacity-100 z-[5]'
          : 'translate-y-[-10px] opacity-0 z-[-1]'
      )}>
        <ArrowDropdown/>

        <div className={clsx(
          'divide-y',
          'divide-divider-light-400 dark:divide-divider-400'
        )}>
          {data.map(({ id, text }, index:number) => {
            return (
              <ItemButton
                key={index}
                className={className?.dropdownItemButton}
                isActive={selected.id === id}
                value={text}
                onClick={() => {
                  setSelected({
                    id,
                    text
                  })
                  setIsOpen(false)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const ItemButton = ({ className, value, isActive, onClick }:{
  className?: string
  isActive: boolean
  value: string,
  onClick(e:any): void
}) => {
  return (
    <Button
      className={clsx(
        'flex justify-between items-center',
        'w-full block',
        'text-left text-bodysmall font-medium',
        'py-2 first:pt-0 last:pb-0',
        'h-9 first:h-7 last:h-7',
        className,
        isActive
          ? 'text-text-400 dark:text-text-100'
          : 'text-text-200 dark:text-text-300'
      )}
      onClick={onClick}
    >
      {() => (
        <>
          {value}
          {isActive && <CheckListIcon/>}
        </>
      )}
    </Button>
  )
}

const ArrowDropdown = () => {
  return (
    <div className={(clsx(
      'absolute z-[10]',
      'w-2 h-2',
      'top-[-5px] right-5'
    ))}>
      <div className={clsx(
        'rotate-45',
        'rounded-tl-[1px]',
        'border-l border-t',
        'bg-white dark:bg-surface-400',
        'w-full h-full',
        'border-l-divider-light-400 dark:border-l-divider-500',
        'border-t-divider-light-400 dark:border-t-divider-500'
      )}/>
    </div>
  )
}

const CheckListIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-[#2160DC]/10 dark:fill-[#172551]" width="16" height="16" rx="8" />
      <path d="M11.3307 5.5L6.7474 10.0833L4.66406 8" stroke="#2160DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ArrowIcon = ({ isOpen }:{
  isOpen: boolean
}) => {
  return (
    <svg
      className={clsx(
        'transition-all duration-300 transform',
        'stroke-icon-light-400 dark:stroke-text-400',
        isOpen ? 'rotate-180' : 'rotate-0'
      )}
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Dropdown

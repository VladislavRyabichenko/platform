import clsx from 'clsx'
import React, { forwardRef, useState } from 'react'

import useCloseClickOutside from 'utils/useCloseClickOutside'

const PopOver = forwardRef(({ popOverButton, children, className }:{
  popOverButton: ({
    handleToggle, isShowPopOver, setIsShowPopOver
  }:{
    isShowPopOver: boolean
    setIsShowPopOver: (value: boolean) => void
    handleToggle: () => void
    onClose: () => void
  }) => React.ReactNode
  children: ({
    handleToggle, isShowPopOver, setIsShowPopOver
  }:{
    isShowPopOver: boolean
    setIsShowPopOver: (value: boolean) => void
    handleToggle: () => void
    onClose: () => void
  }) => React.ReactNode
  className?:{
    popOverContainer?: string
    arrowContainer?: string
  }
}) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const refContainer = useCloseClickOutside(() => setIsShow(false))

  const handleToogle = () => {
    if (isShow) {
      return setIsShow(false)
    }
    return setIsShow(true)
  }

  const handleClose = () => {
    return setIsShow(false)
  }

  return (
    <div ref={refContainer} className="relative">
      {popOverButton({
        isShowPopOver: isShow,
        setIsShowPopOver: setIsShow,
        handleToggle: handleToogle,
        onClose: handleClose
      })}

      <div className={clsx(
        'absolute',
        'bg-white dark:bg-surface-400',
        'border',
        'border-divider-light-400 dark:border-divider-500',
        'rounded-[10px]',
        'transition-transform duration-500 ease-out',
        'transform',
        className?.popOverContainer,
        isShow ? 'translate-y-0 opacity-100 z-[100]' : 'translate-y-[-10px] opacity-0 z-[-100]'
      )}>
        <Arrow
          className={{
            container: className?.arrowContainer
          }}
        />

        {children({
          isShowPopOver: isShow,
          setIsShowPopOver: setIsShow,
          handleToggle: handleToogle,
          onClose: handleClose
        })}
      </div>
    </div>
  )
})

const Arrow = ({ className }:{
  className?:{
    container?: string
    arrow?: string
  }
}) => {
  return (
    <div className={(clsx(
      'absolute z-[10]',
      'w-2 h-2',
      'top-[-5px] right-5',
      className?.container
    ))}>
      <div className={clsx(
        'rotate-45',
        'rounded-tl-[1px]',
        'border-l border-t',
        'bg-white dark:bg-surface-400',
        'w-full h-full',
        'border-l-divider-light-400 dark:border-l-divider-500',
        'border-t-divider-light-400 dark:border-t-divider-500',
        className?.arrow
      )}/>
    </div>
  )
}

PopOver.displayName = 'PopOver'

export default PopOver

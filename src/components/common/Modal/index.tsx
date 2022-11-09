import clsx from 'clsx'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import CloseButton from './CloseButton'
import useStyleOverflow from 'utils/useStyleOverflow'

const Modal = ({ children, isShow, className, onClose }:{
  children: React.ReactNode
  isShow: boolean
  className?: {
    rootContainer?: string
    modalBackground?: string
    modalContainer?: string
    closeButton?: string
  }
  onClose?(e: KeyboardEvent): void
}) => {
  useStyleOverflow(isShow)

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose?.(e)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return ReactDOM.createPortal(
    isShow
      ? (
        <div className={clsx(
          'fixed top-0 left-0 w-full h-full py-[94px] z-[10]',
          className?.rootContainer
        )}>
          {/* Background */}
          <div className={clsx(
            'bg-[#060721]/20 dark:bg-[#060721]/70',
            'fixed top-0 left-0 w-full h-full backdrop-blur-[9.5px] z-[-1]',
            className?.modalBackground
          )} />

          <div className={clsx(
            'relative',
            'bg-white dark:bg-surface-400',
            'w-full mx-auto rounded-xl',
            'border',
            'border-divider-light-500 dark:border-[#2C2D43]',
            className?.modalContainer
          )}>
            {onClose && <CloseButton className={className?.closeButton} onClose={onClose} />}

            {children}
          </div>
        </div>
      )
      : (
        <></>
      ),

      document.getElementById('root')!
  )
}

export default Modal

import clsx from 'clsx'
import React from 'react'

import Body from './Body'
import Footer from './Footer'

import { Button } from 'components/common'

const JoinModal = ({ isOpen, onClose }:{
  isOpen: boolean
  onClose(e:any): void
}) => {
  return (
    <div className={clsx(
      'z-[100]',
      'w-full fixed inset-0 pt-10 pb-[76px]',
      'bg-[#060721]/20 dark:bg-[#060721]/70',
      'backdrop-blur-[9.5px]',
      'overflow-scroll',
      isOpen ? 'block' : 'hidden'
    )}>
      <div className={clsx(
        'relative',
        'max-w-[564px] mx-auto',
        'rounded-xl',
        'bg-white dark:bg-surface-400'
      )}>
        <CloseButton onClick={onClose} />
        <img src={require('./illustration.png')} alt=""/>
        <Body/>
        <Footer onClose={onClose}/>
      </div>
    </div>
  )
}

const CloseButton = ({ onClick }:{
  onClick(e:any):void
}) => {
  return (
    <Button
      className="absolute right-5 top-5"
      onClick={onClick}
    >
      {() => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0013 29.3337C23.3651 29.3337 29.3346 23.3641 29.3346 16.0003C29.3346 8.63653 23.3651 2.66699 16.0013 2.66699C8.63751 2.66699 2.66797 8.63653 2.66797 16.0003C2.66797 23.3641 8.63751 29.3337 16.0013 29.3337Z" fill="white" fillOpacity="0.06"/>
          <path d="M20 12L12 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

export default JoinModal

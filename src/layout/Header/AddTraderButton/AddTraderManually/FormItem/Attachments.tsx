import clsx from 'clsx'
import React from 'react'

const Attachments = () => {
  return (
    <>
      <div className={clsx(
        'flex flex-col items-center',
        'border border-dashed',
        'border-divider-light-500 dark:border-divider-500',
        'pt-7 pb-6',
        'rounded-xl'
      )}>
        <DropIcon/>
        <div className="mt-3">
          <h3 className="text-center text-bodysmall font-bold text-text-400 dark:text-text-100">Drop chart here</h3>
          <p className="text-center text-caption font-medium text-text-300 dark:text-text-400 mt-1">
        or click <a href="#" className="text-primary-500 font-bold">here</a> to browse file
          </p>
        </div>
      </div>
    </>
  )
}

const DropIcon = () => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7062 7.02188C21.8937 7.20938 22 7.4625 22 7.72812V22.5C22 23.3284 21.3284 24 20.5 24H1.5C0.671573 24 0 23.3284 0 22.5V1.5C0 0.671573 0.671573 0 1.5 0H14.2719C14.5375 0 14.7938 0.10625 14.9813 0.29375L21.7062 7.02188ZM19.6938 8.1875L13.8125 2.30625V8.1875H19.6938Z" fill="#4C4D5F"/>
    </svg>
  )
}

export default Attachments

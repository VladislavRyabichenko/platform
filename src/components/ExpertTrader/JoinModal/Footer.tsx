import React from 'react'

import { Button } from 'components/common'
import clsx from 'clsx'

const Footer = ({ onClose }: {onClose(e:any):void}) => {
  return (
    <div className={clsx(
      'flex justify-end items-center',
      'gap-x-8',
      'py-4 px-7',
      'border-t border-t-divider-light-400 dark:border-t-divider-500'
    )}>
      <Button
        className={clsx(
          'text-bodysmall font-bold text-text-200 dark:text-text-400',
          'h-fit',
          'w-fit'
        )}
        onClick={onClose}
      >
        {() => 'Discard'}
      </Button>

      <Button
        className={clsx(
          'bg-primary-500 rounded-md',
          'text-bodysmall font-bold text-white dark:text-text-100',
          'h-10',
          'w-[89px]'
        )}
        onClick={onClose}
      >
        {() => 'Apply'}
      </Button>
    </div>
  )
}

export default Footer

import clsx from 'clsx'
import React, { useState } from 'react'

import { Button } from 'components/common'
import { IconBar, IconEmoticon, IconGalery } from './Icon'

const FormSendTweet = ({ className }:{className:string}) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <form className={clsx(
      'p-3',
      'bg-white dark:bg-surface-400',
      'border rounded-xl',
      isFocus
        ? 'border-white'
        : 'border-divider-light-400 dark:border-divider-500',
      className
    )}>
      <div className="flex items-center gap-x-2">
        <input
          onFocus={() => {
            setIsFocus(true)
          }}
          onBlur={() => {
            setIsFocus(false)
          }}
          className={clsx(
            'bg-transparent',
            'w-full',
            'focus:outline-none',
            'text-black/60 dark:text-white',
            'placeholder:text-text-200 dark:placeholder:text-text-400',
            'text-bodysmall font-medium'
          )}
          placeholder="Type what is on your mind..."
        />
        <Button className="text-bodysmall font-bold text-primary-500">
          {() => 'Send'}
        </Button>
      </div>

      <div className="flex gap-x-2 mt-[19px]">
        <Button>
          {() => <IconEmoticon/>}
        </Button>
        <Button>
          {() => <IconGalery/>}
        </Button>
        <Button>
          {() => <IconBar/>}
        </Button>
      </div>
    </form>
  )
}

export default FormSendTweet

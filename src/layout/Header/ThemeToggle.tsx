import clsx from 'clsx'
import React from 'react'

import { setTheme } from 'store/general-function/actionCreators'
import { useTypedSelector, useAppDispatch } from 'hooks/useTypeSelector'

import { Toggle } from 'components/common'

const ThemeToogle = () => {
  const dispatch = useAppDispatch()
  const { generalFunction } = useTypedSelector(state => state)
  const { theme } = generalFunction

  return (
    <div className={clsx(
      'border-r sm:border-x',
      'pr-4 sm:px-4',
      'border-x-divider-light-500 dark:border-x-divider-500',
      'flex items-center gap-x-3'
    )}>
      <p className="text-text-200 dark:text-text-400 text-bodysmall font-bold">Dark</p>
      <Toggle
        id="toggle-theme-selection"
        isChecked={theme === 'dark'}
        onChange={(e) => {
          return e.target.checked
            ? dispatch(setTheme('dark', generalFunction))
            : dispatch(setTheme('light', generalFunction))
        }}
      />
    </div>
  )
}

export default ThemeToogle

import clsx from 'clsx'
import React, { useState } from 'react'

import { FormType, Type } from './d.type'
import { Button } from 'components/common'
import { Attachments, InputChart, InputField, InputSelect, InputTab } from './FormItem'
import { useTypedSelector, useAppDispatch } from 'hooks/useTypeSelector'
import { setInstrumentType } from 'store/general-function/actionCreators'

const FormGroup = ({ type, label, isRequired, className, placeholder, selectValue }:{
  type: Type
  label: string
  isRequired?: boolean
  className?: string
  placeholder?: string
  selectValue?: string
}) => {
  return (
    <div className={clsx(
      className,
      'space-y-2'
    )}>
      <label className="text-caption font-medium text-text-300 dark:text-text-400">
        {label}
        {isRequired && <span className="text-danger-500">*</span>}
      </label>
      {renderSwitchInputComponent({
        type, placeholder, selectValue
      })}
    </div>
  )
}

const renderSwitchInputComponent = ({ type, placeholder, selectValue }:{
  type: Type
  placeholder?: string
  selectValue?: string
}) => {
  switch (type) {
  case FormType.TAB_STATUS:{
    const [side, setSide] = useState('closed')

    return <InputTab
      id="statusTab"
      arrTab={[
        { id: 'open', value: 'Open' },
        { id: 'closed', value: 'Closed' }
      ]}
      defaulSelected={side}
      setInstrumentSelected={(newSelected: string) => setSide(newSelected)}
    />
  }

  case FormType.INPUT_FIELD:
    return <InputField placeholder={placeholder} />

  case FormType.ENTRY_DATE:
    return (
      <Button className={clsx(
        'flex justify-between items-center h-10 px-3 w-full rounded-md',
        'bg-surface-light-500 dark:bg-white/[0.06]'
      )}>
        {() => (
          <>
            <p className="text-bodysmall font-medium text-text-200 dark:text-text-500">Select date</p>

            <svg className="stroke-[#B4B5BC] dark:stroke-[#444558]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7L8 11L12 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </Button>
    )

  case FormType.CHART:
    return <InputChart/>

  case FormType.TAB_SIDE:{
    const [side, setSide] = useState('long')

    return <InputTab
      id="sideTab"
      arrTab={[
        { id: 'long', value: 'Long' },
        { id: 'short', value: 'Short' }
      ]}
      defaulSelected={side}
      setInstrumentSelected={(newSelected: string) => setSide(newSelected)}
    />
  }

  case FormType.TAB_INSTRUMENT_TYPE:{
    const dispatch = useAppDispatch()

    const { generalFunction } = useTypedSelector(state => state)
    const { instrumentType } = generalFunction

    return <InputTab
      id="instrumentTypeTab"
      arrTab={[
        { id: 'option', value: 'Option' },
        { id: 'stock', value: 'Stock' },
        { id: 'future', value: 'Future' },
        { id: 'forex', value: 'Forex' },
        { id: 'crypto', value: 'Crypto' }
      ]}
      defaulSelected={instrumentType}
      setInstrumentSelected={(newSelected: string) => dispatch(setInstrumentType(newSelected, generalFunction))}
    />
  }

  case FormType.TAB_OPTION_TYPE:{
    const [side, setSide] = useState('call')

    return <InputTab
      id="statusTab"
      arrTab={[
        { id: 'call', value: 'Call' },
        { id: 'put', value: 'Put' }
      ]}
      defaulSelected={side}
      setInstrumentSelected={(newSelected: string) => setSide(newSelected)}
    />
  }

  case FormType.TEXTAREA_COMMENTS:
    return (
      <textarea
        rows={20}
        className={clsx(
          'resize-none',
          'w-full h-[96px]',
          'bg-surface-light-500 dark:bg-white/[0.06]',
          'rounded-md',
          'flex px-3 pt-2.5',
          'text-bodysmall font-medium',
          'text-black/60 dark:text-white/60',
          'placeholder:text-text-200 dark:placeholder:text-text-500',
          'border-none outline-none',
          'focus:outline-black/30 dark:focus:outline-white/60 focus:outline-1'
        )}
        placeholder="Enter here..."
      ></textarea>
    )

  case FormType.INPUT_SELECT:
    return <InputSelect value={selectValue} />

  case FormType.ATTACHMENTS:
    return <Attachments/>

  default:
    return <></>
  }
}

export default FormGroup

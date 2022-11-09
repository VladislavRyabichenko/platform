import React from 'react'

import { FormType } from './d.type'
import FormGroup from './FormGroup'
import { useTypedSelector } from 'hooks/useTypeSelector'
import { OptionTab, StockTab, FutureTab, ForexTab, CryptoTab } from './InstrumentType'

const Step2 = () => {
  const { instrumentType } = useTypedSelector(state => state.generalFunction)

  return (
    <div className="mt-9 space-y-5">
      <FormGroup
        type={FormType.TAB_SIDE}
        label="Side"
      />

      <FormGroup
        type={FormType.TAB_INSTRUMENT_TYPE}
        label="Instrument Type"
      />

      {instrumentType === 'option' && <OptionTab/>}
      {instrumentType === 'stock' && <StockTab/>}
      {instrumentType === 'future' && <FutureTab/>}
      {instrumentType === 'forex' && <ForexTab/>}
      {instrumentType === 'crypto' && <CryptoTab/>}
    </div>
  )
}

export default Step2

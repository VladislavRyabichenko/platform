import React from 'react'

import { FormType } from './d.type'

import FormGroup from './FormGroup'

const Step1 = () => {
  return (
    <div className="mt-9 space-y-5">
      <FormGroup
        type={FormType.TAB_STATUS}
        label="Status"
      />

      <FormGroup
        type={FormType.INPUT_FIELD}
        label="Symbol"
        isRequired={true}
        placeholder="Type symbols..."
      />

      <FormGroup
        type={FormType.CHART}
        label="Chart"
      />

      <div className="flex justify-between space-x-4">
        <FormGroup
          className="w-full"
          type={FormType.ENTRY_DATE}
          label="Entry Date"
          isRequired={true}
        />
        <FormGroup
          className="w-full"
          type={FormType.INPUT_FIELD}
          label="Entry Price"
          isRequired={true}
          placeholder="Enter here..."
        />
      </div>

      <FormGroup
        type={FormType.INPUT_FIELD}
        label="Position Size"
        isRequired={true}
        placeholder="Enter here..."
      />
    </div>
  )
}

export default Step1

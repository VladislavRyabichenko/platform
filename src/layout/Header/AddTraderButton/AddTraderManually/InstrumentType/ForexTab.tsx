import React from 'react'

import { FormType } from '../d.type'
import FormGroup from '../FormGroup'

const ForexTab = () => {
  return (
    <>
      <div className="flex justify-between space-x-4">
        <FormGroup
          className="w-full"
          type={FormType.INPUT_FIELD}
          label="$ Profit/Loss"
          isRequired={true}
          placeholder="Enter here..."
        />
        <FormGroup
          className="w-full"
          type={FormType.INPUT_FIELD}
          label="% Profit/Loss"
          isRequired={true}
          placeholder="Enter here..."
        />
      </div>

      <FormGroup
        type={FormType.TEXTAREA_COMMENTS}
        label="Comments"
        isRequired={true}
      />

      <FormGroup
        type={FormType.INPUT_SELECT}
        label="Broker"
        selectValue="Other"
      />

      <FormGroup
        type={FormType.ATTACHMENTS}
        label="Attachments"
      />
    </>
  )
}

export default ForexTab

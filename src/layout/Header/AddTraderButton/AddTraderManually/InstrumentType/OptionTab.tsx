import React from 'react'

import { FormType } from '../d.type'
import FormGroup from '../FormGroup'

const OptionTab = () => {
  return (
    <>
      <FormGroup
        type={FormType.TAB_OPTION_TYPE}
        label="Option Type"
      />

      <FormGroup
        type={FormType.INPUT_FIELD}
        label="Strike"
        placeholder="Enter here..."
      />

      <FormGroup
        type={FormType.INPUT_FIELD}
        label="Expiration"
        placeholder="Enter here..."
      />

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
        isRequired={true}
        selectValue="Other"
      />

      <FormGroup
        type={FormType.ATTACHMENTS}
        label="Attachments"
      />
    </>
  )
}

export default OptionTab

import React, { useState } from 'react'

import Footer from './Footer'
import Step1 from './Step1'
import Step2 from './Step2'

const AddTraderManually = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <div className="px-7 pb-6">
        <h4 className="text-bodylarge font-bold text-text-500 dark:text-text-100">Add Trades Manually</h4>
        <p className="text-bodysmall font-medium text-text-200 dark:text-text-400 mt-1">By adding trades manually, you can’t access all the feature</p>

        {step === 1 && (
          <Step1/>
        )}
        {step === 2 && (
          <Step2/>
        )}
      </div>

      <Footer step={step} setStep={setStep} />
    </>
  )
}

export default AddTraderManually

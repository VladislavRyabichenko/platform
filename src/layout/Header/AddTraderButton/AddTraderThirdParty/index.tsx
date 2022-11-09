import React from 'react'
import BrokerItem from './BrokerItem'

import SearchInput from './SearchInput'

const AddTraderThirdParty = () => {
  return (
    <>
      <div className="px-7 pb-10">
        <h4 className="text-bodylarge font-bold text-text-500 dark:text-text-100">
          Connect Your Stock Brokers
        </h4>
        <p className="text-bodysmall font-medium text-text-200 dark:text-text-400 mt-1">
          You can connect multiple accounts
        </p>

        <div className="mt-8">
          <SearchInput/>

          <div className="mt-6 space-y-5">
            <BrokerItem
              logoName="ally"
              brokerName="Ally"
              description="Connect your Ally account"
            />
            <BrokerItem
              logoName="blackwood"
              brokerName="Blackwood"
              description="Connect your Blackwood account"
            />
            <BrokerItem
              logoName="e-trade"
              brokerName="E-Trade"
              description="Connect your E-Trade account"
            />
            <BrokerItem
              logoName="fidelity"
              brokerName="Fidelity"
              description="Connect your Fidelity account"
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default AddTraderThirdParty

import React from 'react'
import Dropdown from './Dropdown'

const ConnectToBroker = () => {
  return (
    <div className="">
      <div className="mt-[214px] mb-[294px] mx-auto w-fit">
        <div className="space-y-2">
          <img className="mx-auto w-[160px] h-[160px]" src={require('./illustration.png')} alt=""/>
          <h4 className="text-center text-h4 font-bold text-text-400">Connect your account to access</h4>
          <p className="text-center text-bodysmall font-medium text-text-400">Verify your account by connecting to your Stock Broker account</p>
        </div>

        <Dropdown/>
      </div>
    </div>
  )
}

export default ConnectToBroker

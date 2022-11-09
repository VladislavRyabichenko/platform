import React, { useState } from 'react'

import { Header, JoinModal, TraderByGroup, TraderTable } from 'components/ExpertTrader'

// import { ConnectToBroker } from 'components/common'

import dataExpertTraders, { ExpertTraderEntities } from 'data/dataExpertTrader'

const ExpertTrader = () => {
  const keyDataExpertTrader = Object.keys(dataExpertTraders) as Array<keyof ExpertTraderEntities>
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      {/* <ConnectToBroker/> */}

      <JoinModal isOpen={openModal} onClose={() => { setOpenModal(false) }} />

      <div className="w-full py-4">
        <Header onClick={() => { setOpenModal(true) }}/>

        {keyDataExpertTrader.map((key: keyof ExpertTraderEntities, index:number) => {
          const { title, description, mentors } = dataExpertTraders[key]

          return (
            <TraderByGroup
              key={key}
              id={key}
              header={{
                title,
                description
              }}
              mentors={mentors}
            />
          )
        })}

        <TraderTable/>
      </div>
    </div>
  )
}

export default ExpertTrader

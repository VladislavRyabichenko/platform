import React, { useState } from 'react'

import { Header, MentorByGroup, MentorTable, JoinModal, DetailMentor } from 'components/Mentor'

// import { ConnectToBroker } from 'components/common'

import dataMentors, { MentorsEntities } from 'data/dataMentors'

const Mentors = () => {
  const keyDataMentors = Object.keys(dataMentors) as Array<keyof MentorsEntities>
  const [openModal, setOpenModal] = useState(false)
  const [openDetailMentor, setOpenDetailMentor] = useState(false)

  return (
    <div>
      {/* <ConnectToBroker/> */}

      <JoinModal isOpen={openModal} onClose={() => { setOpenModal(false) }} />
      <DetailMentor isOpen={openDetailMentor} onClose={() => { setOpenDetailMentor(false) }} />

      <div className="w-full py-4">
        <Header onClick={() => { setOpenModal(true) }}/>

        {keyDataMentors.map((key: keyof MentorsEntities, index:number) => {
          const { title, description, mentors } = dataMentors[key]

          return (
            <MentorByGroup
              key={key}
              id={key}
              header={{
                title,
                description
              }}
              mentors={mentors}
              onOpenDetailMentor={() => {
                setOpenDetailMentor(true)
              }}
            />
          )
        })}

        <MentorTable/>
      </div>
    </div>
  )
}

export default Mentors

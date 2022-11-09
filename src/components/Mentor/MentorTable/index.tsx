import React from 'react'

import Header from './Header'
import RowData from './RowData'
import Footer from './Footer'

import { useTypedSelector } from 'hooks/useTypeSelector'

const MentorTable = () => {
  const { mentors } = useTypedSelector(state => state.mentors)

  return (
    <div className="px-5 md:px-6 pt-5">
      <div className="bg-white dark:bg-surface-400 rounded-xl">
        <Header/>
        <div className="px-5 pt-3 xl:pt-4 xl:px-6">
          {mentors.map((item, index) => {
            return (
              <RowData key={index} data={item} />
            )
          })}
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default MentorTable

import React from 'react'

import Header from './Header'
import RowData from './RowData'
import Footer from './Footer'

import { useTypedSelector } from 'hooks/useTypeSelector'

const TraderTable = () => {
  const { expertTrader } = useTypedSelector(state => state.expertTrader)

  return (
    <div className="px-6 pt-5">

      <div className="bg-white dark:bg-surface-400 rounded-xl">
        <Header/>
        <div className="pt-4 px-6">
          {expertTrader.map((item, index) => {
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

export default TraderTable

import React, { useState } from 'react'

import { Dropdown } from 'components/common'
import clsx from 'clsx'

const SelectIndex = () => {
  const [selected, setSelected] = useState<{id:string, text: string}>({
    id: 'sp500',
    text: 'S&P 500'
  })

  const arrItem = [
    {
      id: 'sp500',
      text: 'S&P 500'
    },
    {
      id: 'nasdaq',
      text: 'Nasdaq'
    },
    {
      id: 'dow-jones',
      text: 'Dow Jones'
    },
    {
      id: 'avg-trader-performance',
      text: 'Avg Trader\'s Performance'
    }
  ]

  return (
    <Dropdown
      className={{
        rootContainer: 'relative w-full md:w-fit',
        dropdownButton: 'w-full',
        dropdownContainer: clsx(
          'w-[228px]',
          'right-[-8px]'
        ),
        dropdownItemButton: ''
      }}
      data={arrItem}
      selected={selected}
      setSelected={setSelected}
    />
  )
}

export default SelectIndex

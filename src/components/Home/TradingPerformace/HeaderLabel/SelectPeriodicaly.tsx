import React, { useState } from 'react'

import { Dropdown } from 'components/common'
import clsx from 'clsx'

const SelectPeriodicaly = () => {
  const [selected, setSelected] = useState<{id:string, text: string}>({
    id: 'weekly',
    text: 'Weekly'
  })

  const arrItem = [
    {
      id: 'daily',
      text: 'Daily'
    },
    {
      id: 'weekly',
      text: 'Weekly'
    },
    {
      id: 'monthly',
      text: 'Monthly'
    },
    {
      id: 'yearly',
      text: 'Yearly'
    },
    {
      id: 'custom',
      text: 'Custom'
    }
  ]

  return (
    <Dropdown
      className={{
        rootContainer: 'relative',
        dropdownButton: '',
        dropdownContainer: clsx(
          'w-[168px]',
          'right-0'
        ),
        dropdownItemButton: ''
      }}
      data={arrItem}
      selected={selected}
      setSelected={setSelected}
    />
  )
}

export default SelectPeriodicaly

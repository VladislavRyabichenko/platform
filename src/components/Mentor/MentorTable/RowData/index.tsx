import clsx from 'clsx'
import React from 'react'

import Mobile from './Mobile'
import Tablet from './Tablet'
import Desktop from './Desktop'

import useResponsive from 'utils/useResponsive'

import { IRowData } from './type'

const RowData = ({ data }: IRowData) => {
  const { xl, md } = useResponsive()

  return (
    <div className={clsx(
      'grid w-full',
      `
      md:grid-cols-[max-content_auto]
      xl:grid-cols-[5%_20%_9%_10%_13.5%_13.5%_7.5%_11.5%_10%]
      `,
      'gap-x-3 xl:gap-x-0',
      'items-start xl:items-center',
      'py-3',
      'first:pt-0',
      'border-b border-b-divider-light-400 dark:border-b-divider-400'
    )}>
      {xl
        ? <Desktop data={data} />
        : md
          ? <Tablet data={data} />
          : <Mobile data={data} />
      }
    </div>
  )
}

export default RowData

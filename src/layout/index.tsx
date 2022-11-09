import clsx from 'clsx'
import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

import useResponsive from 'utils/useResponsive'

const Layout = () => {
  const { sm } = useResponsive()

  return (
    <div className={clsx(
      'w-full grid',
      'grid-cols-1 sm:grid-cols-[min-content_minmax(0%,100%)]'
    )}>
      {sm && <Sidebar/>}
      <div className="w-full">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

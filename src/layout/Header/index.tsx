import clsx from 'clsx'
import React from 'react'
import { useLocation } from 'react-router'

import Message from './Message'
import Notification from './Notification'
import AddTraderButton from './AddTraderButton'
import ThemeToogle from './ThemeToggle'
import UserProfile from './UserProfile'
import HamburgerButton from './HamburgerButton'

import useResponsive from 'utils/useResponsive'

function removeTrailingSlash (str:string) {
  return str.replace(/^\/|\/$/g, '')
}

const Header = () => {
  const { pathname } = useLocation()

  const urlPathname = removeTrailingSlash(pathname)

  const { sm } = useResponsive()

  return (
    <div className={clsx(
      'grid',
      'gap-x-4 gap-y-4',
      'sm:grid-flow-col',
      'sm:auto-cols-max',
      'sm:grid-cols-[auto_max-content_max-content]',
      'px-5 md:px-6 py-5 w-full'
    )}>
      {sm ? <LargeDevice urlPathName={urlPathname}/> : <SmallDevice urlPathName={urlPathname} />}
    </div>
  )
}

const SmallDevice = ({ urlPathName }:{
  urlPathName: string
}) => {
  return (
    <>
      <div className="flex justify-between">
        <HamburgerButton className="grid-in-hamburger-button w-fit"/>

        <div className={clsx(
          'flex items-center',
          'space-x-4'
        )}>
          <ThemeToogle />
          <UserProfile className=""/>
        </div>
      </div>

      <div className="flex justify-between">
        <TitlePage urlPathName={urlPathName} />

        <div className={clsx(
          'flex items-center',
          'space-x-4 md:space-x-3',
          'justify-self-end'
        )}>
          <Message className="" />
          <Notification className=""/>
        </div>
      </div>

      {urlPathName === '' &&
        <div>
          <AddTraderButton className=""/>
        </div>
      }
    </>
  )
}

const LargeDevice = ({ urlPathName }:{
  urlPathName: string
}) => {
  return (
    <>
      <TitlePage urlPathName={urlPathName} />

      <div className={clsx(
        'flex items-center',
        'space-x-4 md:space-x-3',
        'justify-self-end'
      )}>
        <Message className="" />
        <Notification className=""/>
      </div>

      <div className={clsx(
        'flex items-center',
        'space-x-4'
      )}>
        {urlPathName === '' && <AddTraderButton className=""/>}
        <ThemeToogle />
        <UserProfile className=""/>
      </div>
    </>
  )
}

const TitlePage = ({ urlPathName }:{
  urlPathName: string
}) => {
  return (
    <p className={clsx(
      'text-bodylarge sm:text-h4',
      'w-fit font-bold',
      'dark:text-text-100 text-text-500'
    )}>{useTitlePage(urlPathName)}</p>
  )
}

const useTitlePage = (path: string) => {
  switch (path) {
  case '':
    return 'My Home'

  case 'trader-community':
    return 'Trader’s Community'

  case 'leaderboard':
    return 'Leaderboard'

  case 'expert-traders':
    return 'Expert Traders'

  case 'mentors':
    return 'Mentors'

  case 'settings':
    return 'Settings & Billing'

  case 'support':
    return 'Support'

  default:
    break
  }
}

export default Header

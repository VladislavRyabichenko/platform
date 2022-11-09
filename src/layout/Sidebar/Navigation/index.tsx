import React from 'react'
import { useLocation } from 'react-router'

import NavItem from './NavItem'
import { Trader, Leaderboard, ExpertTrader, Mentors, Setting, Support, Dashboard } from './Icon'

function removeTrailingSlash (str:string) {
  return str.replace(/^\/|\/$/g, '')
}

const Navigation = () => {
  const { pathname } = useLocation()

  const path = removeTrailingSlash(pathname)

  return (
    <nav className="xl:mt-[26px] xl:space-y-5">
      <NavItem isActive={path === ''} label='Dashboard' icon={Dashboard} href="/" />
      <NavItem isActive={path === 'trader-community'} label='Trader’s Community' icon={Trader} href="/trader-community" />
      <NavItem isActive={path === 'leaderboard'} label='Leaderboard' icon={Leaderboard} href="/leaderboard" />
      <NavItem isActive={path === 'expert-traders'} label='Expert Traders' icon={ExpertTrader} href="/expert-traders" />
      <NavItem isActive={path === 'mentors'} label='Mentors' icon={Mentors} href="/mentors" />
      <NavItem isActive={path === 'settings'} label='Settings & Billing' icon={Setting} href="/settings" />
      <NavItem isActive={path === 'support'} label='Support' icon={Support} href="/support" />
    </nav>
  )
}

export default Navigation

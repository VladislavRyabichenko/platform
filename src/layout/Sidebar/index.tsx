import clsx from 'clsx'
import React from 'react'

import Banner from './Banner'
import Navigation from './Navigation'

import useResponsive from 'utils/useResponsive'
import { Button } from 'components/common'

import { useTypedSelector } from 'hooks/useTypeSelector'

const Sidebar = () => {
  const { xl } = useResponsive()

  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <aside className={clsx(
      'relative w-full',
      'w-[70px] xl:w-[260px]'
    )}>
      <div className={clsx(
        'dark:bg-white/[0.06] bg-white',
        'w-full h-full fixed pt-4',
        'flex flex-col justify-between',
        'border-r',
        'dark:border-r-divider-500 border-r-divider-light-400',
        'max-w-[70px] xl:max-w-[260px]'
      )}>
        <div className={clsx(
          'pl-[11px] xl:pl-5',
          'pr-[11px] xl:pr-1'
        )}>

          {xl
            ? (
              <img className="w-[135px]" src={require(`assets/app-logo/${theme}.png`)} alt=""/>
            )
            : (
              <div className={clsx(
                'flex items-center justify-center',
                'w-12 h-12',
                'border-b',
                'dark:border-b-divider-500 border-b-divider-light-400'
              )}>
                <Button>
                  {() => (
                    <svg className="stroke-icon-light-500 dark:stroke-icon-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 12H21" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Button>
              </div>
            )
          }

          <Navigation/>
        </div>

        {xl
          ? (
            <div className="mb-6 px-4">
              <Banner/>
            </div>
          )
          : (
            <div className="mb-4 w-fit mx-auto">
              <ButtonBanner/>
            </div>
          )
        }
      </div>
    </aside>
  )
}

const ButtonBanner = () => {
  return (
    <Button>
      {() => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="white"/>
          <rect width="48" height="48" rx="12" fill="url(#paint0_linear_5767_168523)"/>
          <path d="M18.168 24H29.8346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 18.168L29.8333 24.0013L24 29.8346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_5767_168523" x1="32.1053" y1="-37.8621" x2="-23.8159" y2="24.166" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8FE8FA"/>
              <stop offset="1" stopColor="#0C5DFF"/>
            </linearGradient>
          </defs>
        </svg>
      )}
    </Button>
  )
}

export default Sidebar

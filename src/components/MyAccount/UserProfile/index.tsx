import React from 'react'

import { Button, PopOver } from 'components/common'
import { ExpertTraderIcon, MentorIcon, VerifiedIcon } from './Icon'
import clsx from 'clsx'

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center space-x-[22px]">
        <Avatar/>

        <div className="max-w-[435px]">
          <div className="flex items-center space-x-1">
            <h5 className="text-h4 font-bold text-text-100">William John</h5>
            <Badge/>
          </div>
          <p className="text-bodysmall font-medium text-text-400">Trader and Mentor for over 9 years. I trade mainly stocks with a proven successful strategies</p>
        </div>
      </div>

      <div className="flex items-center space-x-16">
        <EmailGroup/>
        <UsernameGroup/>
      </div>
    </div>
  )
}

const Avatar = () => {
  return (
    <img className="w-20 h-20" src={require('assets/users/william-john.png')} alt=""/>
  )
}

const Badge = () => {
  return (
    <div className="flex items-center space-x-1">
      <BadgeItem popOverClassName="right-[-42px]" icon={<VerifiedIcon/>} popOverValue="Verified User" />
      <BadgeItem popOverClassName="right-[-44px]" icon={<ExpertTraderIcon/>} popOverValue="Expert Trader" />
      <BadgeItem popOverClassName="right-[-25px]" icon={<MentorIcon/>} popOverValue="Mentor" />
    </div>
  )
}

const BadgeItem = ({ icon, popOverValue, popOverClassName }:{
  icon: React.ReactNode
  popOverValue: string
  popOverClassName: string
}) => {
  return (
    <PopOver
      className={{
        popOverContainer: clsx(
          'mt-[14px]',
          'w-auto h-fit',
          'p-3',
          popOverClassName
        ),
        arrowContainer: clsx(
          'mx-auto right-0 left-0'
        )
      }}
      popOverButton={({ setIsShowPopOver }) => (
        <Button
          className="flex"
          onMouseEnter={() => setIsShowPopOver(true)}
          onMouseLeave={() => setIsShowPopOver(false)}
        >
          {() => icon}
        </Button>
      )}
    >
      {() => <p className="text-caption font-medium text-text-400 whitespace-nowrap">{popOverValue}</p>}
    </PopOver>
  )
}

const EmailGroup = () => {
  return (
    <div>
      <label className="text-bodysmall font-medium text-text-400">Email</label>
      <div className="flex items-center space-x-2">
        <p className="text-bodysmall font-bold text-text-500">Stocks@tryndx.com</p>
        <Button>
          {() => (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.16797 6.83398C2.16797 6.83398 4.20964 9.16732 8.0013 9.16732C11.793 9.16732 13.8346 6.83398 13.8346 6.83398M3.33464 7.79357L2.16797 9.16732M13.8346 9.16732L12.6703 7.79532M6.20114 8.98065L5.66797 10.6257M9.78805 8.98532L10.3346 10.6257" stroke="#4C4D5F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Button>
      </div>
    </div>
  )
}

const UsernameGroup = () => {
  return (
    <div>
      <label className="text-bodysmall font-medium text-text-400">Username</label>
      <div className="flex items-center space-x-2">
        <p className="text-bodysmall font-bold text-text-300">William_John</p>
        <Button>
          {() => (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z" stroke="#4C4D5F" strokeWidth="1.6"/>
              <path d="M8 4.66602H8.00667" stroke="#4C4D5F" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M6.66406 7.33301H7.9974V10.6663M6.66406 10.6663H9.33073" stroke="#4C4D5F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Button>
      </div>
    </div>
  )
}

export default UserProfile

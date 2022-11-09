import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router'

import { Button, Toggle } from 'components/common'

import { ChecklistIcon, ProfileIcon, SettingIcon } from './Icon'

const Profile = ({ onClosePopOver }:{
  onClosePopOver(): void
}) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={clsx(
        'space-y-4 pb-4 border-b',
        'border-b-divider-light-400 dark:border-b-divider-500'
      )}>
        <div className="w-full grid grid-cols-[max-content_auto_max-content] gap-x-2 items-center">
          <img className="w-6 h-6" src={require('assets/user-1.png')} alt=""/>
          <p className="text-left text-bodysmall font-medium text-text-400 dark:text-text-100">Zakan Zuk</p>
          <ChecklistIcon/>
        </div>

        <Button
          onClick={() => {
            navigate('/user/zakan-zuk')
            onClosePopOver()
          }}
          className="flex items-center space-x-2"
        >
          {() => (
            <>
              <ProfileIcon/>
              <p className="text-left text-bodysmall font-medium text-text-400 dark:text-text-100">My Profile</p>
            </>
          )}
        </Button>

        <Button className="flex items-center space-x-2">
          {() => (
            <>
              <SettingIcon/>
              <p className="text-left text-bodysmall font-medium text-text-400 dark:text-text-100">Settings</p>
            </>
          )}
        </Button>
      </div>

      <div className={clsx(
        'space-y-4 pt-4 pb-3 border-b',
        'border-b-divider-light-400 dark:border-b-divider-500'
      )}>
        <p className="text-caption font-medium text-text-200 dark:text-text-300">Swith account</p>

        <Button className="flex items-center space-x-2">
          {() => (
            <>
              <img className="w-6 h-6" src={require('assets/user-1.png')} alt=""/>
              <p className="text-left text-bodysmall font-medium text-text-400 dark:text-text-100">Gourav Nadda</p>
            </>
          )}
        </Button>

        <Button className="flex items-center space-x-2">
          {() => (
            <>
              <img className="w-6 h-6" src={require('assets/user-1.png')} alt=""/>
              <p className="text-left text-bodysmall font-medium text-text-400 dark:text-text-100">Larry Squarepants</p>
            </>
          )}
        </Button>

        <Button className={clsx(
          'w-full h-8',
          'bg-primary-500 rounded-md',
          'text-caption font-medium text-white'
        )}>
          {() => 'Add More Accounts'}
        </Button>
      </div>

      <div className="flex items-center space-x-2 pt-3">
        <Toggle
          id="toggle-merge-performance"
          isChecked={true}
          onChange={(e) => {}}
        />

        <p className="text-caption font-medium text-text-200 dark:text-text-300">Merge performance data from all accounts</p>
      </div>
    </div>
  )
}

export default Profile

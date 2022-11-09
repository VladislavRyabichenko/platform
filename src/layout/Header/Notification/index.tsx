import clsx from 'clsx'
import React from 'react'

import { Button, PopOver } from 'components/common'
import { Address, Message, System } from './Icon'

const Notification = ({ className }:{
  className: string
}) => {
  return (
    <PopOver
      popOverButton={({ handleToggle }) =>
        <NotificationButton className={className} handleToggle={handleToggle} />
      }
      className={{
        popOverContainer: clsx(
          'w-[400px]',
          'right-[-14px]',
          'mt-[14px]'
        )
      }}
    >
      {() => (
        <>
          <Header/>
          <Body/>
        </>
      )}
    </PopOver>
  )
}

const Header = () => {
  return (
    <header className="px-5 pt-4 border-b border-b-divider-light-400 dark:border-b-divider-500">
      <div className="flex justify-between mb-6">
        <h5 className="text-bodysmall font-bold text-text-400 dark:text-text-100">Notifications</h5>

        <Button className="text-caption font-medium text-primary-500">
          {() => 'Mark all as read'}
        </Button>
      </div>

      <Navigation/>
    </header>
  )
}

const Navigation = () => {
  return (
    <div className="flex items-center space-x-6">
      <Button className={clsx(
        'flex space-x-1 items-center',
        'border-b-2 border-b-primary-500',
        'pb-3 px-2'
      )}>
        {() => (
          <>
            <p className="text-caption font-bold text-primary-500 dark:text-text-100">General</p>
            <div className={clsx(
              'grid',
              'place-items-center',
              'rounded-full',
              'w-4 h-4 bg-danger-500'
            )}>
              <p className='text-caption font-bold text-text-100'>3</p>
            </div>
          </>
        )}
      </Button>

      <Button className={clsx(
        'border-b-2 border-b-transparent',
        'pb-3 px-2'
      )}>
        {() => (
          <p className="text-caption font-medium text-text-200 dark:text-text-400">Following</p>
        )}
      </Button>
    </div>
  )
}

const Body = () => {
  return (
    <div className="px-5 pt-5 pb-2.5">
      <NotificationItem
        icon={<Message/>}
        content={
          <p className="text-caption font-medium text-text-400 dark:text-text-100">
            You were invited to the <span className="font-bold">Mentorship</span> in trading team by <span className="font-bold">Nathaniel</span>
          </p>
        }
        time='41 minutes ago'
      />

      <NotificationItem
        icon={<Address/>}
        content={
          <p className="text-caption font-medium text-text-400 dark:text-text-100">
            New login location detected on Jaksonville, Florida, USA. Is it you?
          </p>
        }
        time='3 hours ago'
      />

      <NotificationItem
        icon={<System/>}
        content={
          <p className="text-caption font-medium text-text-400 dark:text-text-100">
            Natashya just update her trader mentorship profile, <a href="#" className="text-primary-500 underline">check now</a>
          </p>
        }
        time='4 hours ago'
      />

      <NotificationItem
        icon={<Message/>}
        content={
          <p className="text-caption font-medium text-text-400 dark:text-text-300">
            Confirm your email address
          </p>
        }
        time='41 minutes ago'
      />

      <NotificationItem
        icon={<System/>}
        content={
          <p className="text-caption font-medium dark:font-bold text-text-400 dark:text-text-300">
            System scheduled maintenance on August 28, 2022. Approximately 11:00 - 12:00 PST
          </p>
        }
        time='41 minutes ago'
      />
    </div>
  )
}

const NotificationItem = ({ icon, time, content }:{
  icon: React.ReactNode
  content: React.ReactNode
  time: string
}) => {
  return (
    <div className={clsx(
      'flex items-center space-x-3',
      'py-3',
      'first:pt-0',
      'border-b border-b-divider-light-400 dark:border-b-divider-400'
    )}>
      {icon}

      <div className="space-y-1 max-w-[270px]">
        {content}
        <p className="text-caption font-medium text-text-200 dark:text-text-400">{time}</p>
      </div>
    </div>
  )
}

const NotificationButton = ({ className, handleToggle }:{
  className: string
  handleToggle(e: any): void
}) => {
  return (
    <Button
      className={clsx(
        'flex',
        className
      )}
      onClick={handleToggle}
    >
      {({ isHover }) => (
        <NotificationIcon isHover={isHover} />
      )}
    </Button>
  )
}

const NotificationIcon = ({ isHover }:{
  isHover: boolean
}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={isHover ? 'fill-primary-500' : 'dark:fill-icon-500 fill-icon-light-500'} d="M20.6286 15.9989C20.5508 15.9052 20.4744 15.8114 20.3994 15.7209C19.3682 14.4736 18.7443 13.7208 18.7443 10.1897C18.7443 8.36156 18.3069 6.86156 17.4449 5.73656C16.8093 4.90547 15.95 4.275 14.8175 3.80906C14.803 3.80096 14.79 3.79032 14.7791 3.77766C14.3718 2.41359 13.2571 1.5 11.9999 1.5C10.7427 1.5 9.62849 2.41359 9.22114 3.77625C9.21027 3.78845 9.19744 3.79875 9.18317 3.80672C6.54036 4.89469 5.25599 6.98203 5.25599 10.1883C5.25599 13.7208 4.63302 14.4736 3.60083 15.7195C3.52583 15.81 3.44943 15.9019 3.37161 15.9975C3.17061 16.2399 3.04326 16.5348 3.00464 16.8473C2.96601 17.1598 3.01772 17.4769 3.15365 17.7609C3.44286 18.3703 4.05927 18.7486 4.76286 18.7486H19.2421C19.9424 18.7486 20.5546 18.3708 20.8447 17.7642C20.9812 17.4801 21.0334 17.1628 20.9951 16.8499C20.9568 16.537 20.8297 16.2417 20.6286 15.9989ZM11.9999 22.5C12.6773 22.4995 13.3418 22.3156 13.9232 21.9679C14.5045 21.6202 14.9809 21.1217 15.3018 20.5252C15.3169 20.4966 15.3243 20.4646 15.3234 20.4322C15.3225 20.3999 15.3133 20.3684 15.2966 20.3407C15.2799 20.313 15.2563 20.2901 15.2281 20.2742C15.2 20.2583 15.1682 20.25 15.1358 20.25H8.86489C8.83251 20.2499 8.80066 20.2582 8.77243 20.274C8.74419 20.2899 8.72055 20.3128 8.70379 20.3405C8.68704 20.3682 8.67774 20.3997 8.67681 20.4321C8.67588 20.4645 8.68335 20.4965 8.69849 20.5252C9.01936 21.1216 9.49567 21.6201 10.0769 21.9678C10.6581 22.3155 11.3226 22.4994 11.9999 22.5Z" />
      <circle className="fill-danger-500 dark:stroke-black stroke-surface-light-500" cx="18.75" cy="5.25" r="3.75" strokeWidth="2"/>
    </svg>
  )
}

export default Notification

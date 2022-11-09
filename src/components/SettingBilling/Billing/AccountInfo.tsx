import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'
import ModalAddPayment from './ModalEditPayment'

const AccountInfo = () => {
  return (
    <div className={clsx(
      'flex justify-between items-start',
      'border-y py-7',
      'border-y-divider-light-400 dark:border-y-divider-500'
    )}>
      <div className="space-y-2">
        <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Account Info</h4>
        <p className="text-bodysmall font-medium text-text-200 dark:text-text-400">Connect your account to receive payments</p>
      </div>

      <div className={clsx(
        'max-w-[608px] w-full',
        'border rounded-lg',
        'border-divider-light-400 dark:border-divider-500'
      )}>
        <div className={clsx(
          'grid grid-cols-[max-content_auto_max-content] items-center',
          'gap-x-3',
          'py-4 px-5',
          'border-b border-b-divider-light-400 dark:border-b-divider-500'
        )}>
          <VisaLogo/>

          <div>
            <h5 className="text-bodymedium font-bold text-text-400 dark:text-text-100">AmericanExpress</h5>
            <p className="text-caption font-medium text-text-200 dark:text-text-400">Expires 06/24</p>
          </div>

          <div>
            <ModalAddPayment/>
          </div>
        </div>

        <div className="pt-3 pb-6 px-5">
          <h5 className="text-caption font-medium text-text-200 dark:text-text-400">My deals and promotions</h5>
          <div className="mt-5">
            <DiscountItem
              title="50% off a subscription to High Yield Landlord."
              description="Expires at 6:59 AM on May 4, 2022"
            />
            <DiscountItem
              title="50% off a subscription to High Yield Landlord."
              description="Expires at 6:59 AM on May 4, 2022"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

const DiscountItem = ({ title, description }:{
  title: string
  description: string
}) => {
  return (
    <div className={clsx(
      'flex justify-between items-center',
      'py-4 first:pt-0 last:pb-0',
      'border-b border-b-divider-light-400 dark:border-b-divider-500',
      'last:border-none'
    )}>
      <div className="space-y-1">
        <h6 className="text-bodysmall font-bold text-text-400 dark:text-text-200">{title}</h6>
        <p className="text-caption font-medium text-text-200 dark:text-text-400">{description}</p>
      </div>

      <Button className={clsx(
        'text-caption font-medium text-primary-500',
        'bg-[#2160DC]/10 dark:bg-primary-950 rounded-md',
        'h-8 w-[118px]'
      )}>{() => 'Claim Discount'}</Button>
    </div>
  )
}

const VisaLogo = () => {
  return (
    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="fill-[#D8D8E0] dark:fill-[#4C4D5F]" d="M24.8244 5.0941C24.7971 7.31405 26.7488 8.5528 28.2189 9.28938C29.7294 10.045 30.2368 10.5297 30.2308 11.2055C30.2196 12.2397 29.0259 12.6962 27.909 12.714C25.9603 12.745 24.8272 12.173 23.9265 11.7405L23.2245 15.1176C24.1283 15.5458 25.8017 15.9192 27.537 15.9355C31.6104 15.9355 34.2754 13.8683 34.2898 10.6631C34.3057 6.59521 28.8171 6.37005 28.8546 4.55184C28.8675 4.00051 29.3792 3.41217 30.5004 3.26258C31.0554 3.18702 32.5875 3.12918 34.3245 3.95155L35.0062 0.684077C34.0721 0.334391 32.8716 -0.000453949 31.3768 -0.000453949C27.5428 -0.000453949 24.8462 2.09497 24.8244 5.0941ZM41.5571 0.280992C40.8133 0.280992 40.1865 0.727064 39.9067 1.41159L34.0881 15.6955H38.1585L38.9685 13.3941H43.9425L44.4124 15.6955H48L44.8693 0.280992H41.5571ZM42.1266 4.44504L43.3013 10.2334H40.0841L42.1266 4.44504ZM19.8892 0.281184L16.6807 15.6954H20.5596L23.7666 0.280799H19.8892V0.281184ZM14.1512 0.280799L10.1139 10.7728L8.48081 1.85188C8.28919 0.856029 7.53244 0.280992 6.69206 0.280992H0.0924375L0 0.728606C1.35487 1.03087 2.89425 1.51839 3.82687 2.04003C4.39762 2.35868 4.56038 2.63723 4.74788 3.39444L7.84106 15.6955H11.94L18.2243 0.280992H14.1512" />
    </svg>
  )
}

export default AccountInfo

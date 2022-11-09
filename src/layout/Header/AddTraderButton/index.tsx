import clsx from 'clsx'
import React, { useState } from 'react'

import { Button, PopOver } from 'components/common'
import { AddTrader, ConnectBroker, UploadTrades } from './Icon'
import ModalGroup from './ModalGroup'

import { IModalShow } from './d.type'

const AddTraderButton = ({ className }:{
  className: string
}) => {
  const [isModalShow, setIsShowModal] = useState<IModalShow>({
    'trader-manually': false,
    'trader-thidry-party': false
  })

  const handleModal = (key: keyof IModalShow, value: boolean) => {
    return setIsShowModal(state => {
      const temp = { ...state }
      temp[key] = value
      return { ...temp }
    })
  }

  return (
    <>
      <PopOver
        popOverButton={({ isShowPopOver, handleToggle }) =>
          <Button
            className={clsx(
              'flex items-center justify-center',
              'h-10 w-[130px]',
              'text-white text-bodysmall font-bold bg-primary-500 rounded-md gap-x-1',
              className
            )}
            onClick={handleToggle}
          >
            {() => (
              <>
                Add Trader
                <Icon isOpen={isShowPopOver} />
              </>
            )}
          </Button>
        }
        className={{
          popOverContainer: clsx(
            'py-4 px-5',
            'w-[306px]',
            'right-0',
            'mt-2.5'
          )
        }}
      >
        {({ setIsShowPopOver }) => (
          <div className="space-y-5">
            <DropdownButton
              onClick={() => {
                setIsShowPopOver(false)
                handleModal('trader-manually', true)
              }}
              icon={<ConnectBroker/>}
              title="Connect Your Stock Broker"
              description="By connecting to 3rd party"
            />

            <DropdownButton
              onClick={() => {
                setIsShowPopOver(false)
                handleModal('trader-thidry-party', true)
              }}
              icon={<AddTrader/>}
              title="Add Trades Manually"
              description="By adding trades data manually"
            />

            <DropdownButton
              onClick={() => {
                setIsShowPopOver(false)
              }}
              icon={<UploadTrades/>}
              title="Upload Your Trades"
              description="By uploading your trades data via Excel format"
            />
          </div>
        )}
      </PopOver>

      <ModalGroup isModalShow={isModalShow} onClose={handleModal} />
    </>
  )
}

const DropdownButton = ({ icon, title, description, onClick }:{
  onClick?(e: any): void
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <Button
      onClick={onClick}
      className="w-full grid grid-cols-[max-content_auto_max-content] items-center"
    >
      {({ isHover }) => (
        <>
          {icon}

          <div className="space-y-1 ml-2.5">
            <h5 className="text-left text-bodysmall font-bold text-text-400 dark:text-text-100">{title}</h5>
            <p className="text-left text-caption font-medium text-text-200 dark:text-text-400">{description}</p>
          </div>

          {isHover && <ArrowIcon/>}
        </>
      )}
    </Button>
  )
}

const ArrowIcon = () => {
  return (
    <svg className="stroke-icon-light-500 dark:stroke-text-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33203 8H12.6654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3.33301L12.6667 7.99967L8 12.6663" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const Icon = ({ isOpen }:{
  isOpen: boolean
}) => {
  return (
    <svg
      className={clsx(
        'transition-transform duration-300 transform ease-out',
        isOpen ? 'rotate-180' : 'rotate-0'
      )}
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default AddTraderButton

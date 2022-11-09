import clsx from 'clsx'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import { Button, Toggle } from 'components/common'

const ContainerInputGroup = styled.div`
  ${tw`
    flex items-center justify-between
    py-5 first:pt-0 last:pb-0
    border-b border-b-divider-light-400 dark:border-b-divider-400
    last:border-none
  `}
`

const TitleLabel = styled.p`
  ${tw`
    text-bodysmall font-medium text-text-400 dark:text-text-100
  `}
`

const LabelDescription = styled.p`
  ${tw`
    text-caption font-medium text-text-400 mt-1
  `}
`

const InputSelect = ({ value }:{
  value: string
}) => {
  return (
    <Button className={clsx(
      'flex items-center justify-between',
      'h-8 w-[180px]',
      'bg-black/[0.04] dark:bg-white/[0.06] rounded-md px-3'
    )}>
      {() => (
        <>
          <p className="text-caption font-medium text-text-300 dark:text-text-100">{value}</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7L8 11L12 7" stroke="#4C4D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </>
      )}
    </Button>
  )
}

const ProfilePrivacy = () => {
  return (
    <div className={clsx(
      'flex justify-between items-start py-6',
      'border-t border-t-divider-light-400 dark:border-t-divider-500'
    )}>
      <h4 className="text-bodylarge font-bold text-text-400 dark:text-text-100">Profile & Privacy</h4>

      <div className={clsx(
        'max-w-[608px] w-full'
      )}>
        <PublicAccountLink/>
        <PublicProfile/>
        <ShowPublicly/>
        <DataToShare/>
        <FilterShareData/>
      </div>
    </div>
  )
}

const PublicAccountLink = () => {
  return (
    <ContainerInputGroup>
      <TitleLabel>Public Account Link</TitleLabel>

      <div className={clsx(
        'flex items-center space-x-1.5',
        'h-8 w-[302px]',
        'bg-black/[0.04] dark:bg-white/[0.06] rounded-md px-3'
      )}>
        <Button>
          {() => (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7692 6H7.23077C6.55103 6 6 6.55103 6 7.23077V12.7692C6 13.449 6.55103 14 7.23077 14H12.7692C13.449 14 14 13.449 14 12.7692V7.23077C14 6.55103 13.449 6 12.7692 6Z" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.23077 10C2.90435 10 2.5913 9.87033 2.36048 9.63952C2.12967 9.4087 2 9.09565 2 8.76923V3.23077C2 2.90435 2.12967 2.5913 2.36048 2.36048C2.5913 2.12967 2.90435 2 3.23077 2H8.76923C9.09565 2 9.4087 2.12967 9.63952 2.36048C9.87033 2.5913 10 2.90435 10 3.23077" stroke="#2160DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </Button>

        <p className="text-caption font-medium text-text-300 dark:text-text-100">https://shared.tradersync.com/nasserk1</p>
      </div>
    </ContainerInputGroup>
  )
}

const PublicProfile = () => {
  return (
    <ContainerInputGroup>
      <TitleLabel>Public Profile</TitleLabel>

      <InputSelect value="7 Data selected"/>
    </ContainerInputGroup>
  )
}

const ShowPublicly = () => {
  return (
    <ContainerInputGroup>
      <TitleLabel>Show P/L $ Publicly</TitleLabel>

      <div className="flex space-x-3 items-center">
        <p className="text-bodysmall font-medium text-text-300 dark:text-text-100">On</p>
        <Toggle
          id="toggle-show-publicy"
          isChecked={true}
          onChange={(e) => {}}
        />
      </div>
    </ContainerInputGroup>
  )
}

const DataToShare = () => {
  return (
    <ContainerInputGroup>
      <div>
        <TitleLabel>Data to Share</TitleLabel>
        <LabelDescription>Show table on Trader’s Performance</LabelDescription>
      </div>

      <InputSelect value="6 Data selected" />
    </ContainerInputGroup>
  )
}

const FilterShareData = () => {
  return (
    <ContainerInputGroup>
      <div>
        <TitleLabel>Filter Shared Data</TitleLabel>
        <LabelDescription>Show coloumn list on Transaction</LabelDescription>
      </div>

      <div className="bg-black/[0.04] dark:bg-white/[0.06] rounded-md w-[302px] h-8 px-3 flex items-center">
        <p className="text-caption font-medium text-text-300 dark:text-text-100">No portofolio</p>
      </div>
    </ContainerInputGroup>
  )
}

export default ProfilePrivacy

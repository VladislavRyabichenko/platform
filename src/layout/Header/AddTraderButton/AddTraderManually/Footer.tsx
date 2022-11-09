import clsx from 'clsx'
import React from 'react'

import { Button } from 'components/common'

import { useTypedSelector } from 'hooks/useTypeSelector'

const Footer = ({ step, setStep }:{
  step: number
  setStep(value: number): void
}) => {
  return (
    <div className={clsx(
      'w-full',
      'flex items-center justify-between',
      'h-[72px] px-7',
      'border-t border-t-divider-light-400 dark:border-t-divider-500'
    )}>
      <div className="flex items-center space-x-3">
        <ProgressBar step={step} />
        <p className="text-bodysmall font-bold text-text-200 dark:text-text-500">
          Step {step} / 2
        </p>
      </div>

      {step === 1 && (
        <HandleButton
          value="Next"
          onClick={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <HandleButton
          value="Submit"
          onClick={() => {}}
        />
      )}
    </div>
  )
}

const HandleButton = ({ value, onClick }: {
  value: string
  onClick(e: any): void
}) => {
  return (
    <Button
      onClick={onClick}
      className="bg-primary-500 rounded-md text-bodysmall font-bold text-white h-10 w-20"
    >
      {() => value}
    </Button>
  )
}

const ProgressBar = ({ step }:{
  step: number
}) => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <>
      {step === 1 &&
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke={theme === 'dark' ? '#2C2D43' : '#D8D8E0'} strokeWidth="4"/>
          <mask id="path-2-inside-1_6021_264996" fill="white">
            <path d="M16 29.9921C16 31.101 16.9025 32.013 18.0027 31.8742C21.5077 31.4321 24.7891 29.8383 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68688 27.3137 4.68629C24.7891 2.1617 21.5077 0.5679 18.0027 0.125777C16.9025 -0.0130083 16 0.89898 16 2.00793C16 3.11688 16.9052 3.9987 17.9986 4.18364C20.4355 4.59583 22.7033 5.75521 24.4741 7.52593C26.7215 9.7734 27.9841 12.8216 27.9841 16C27.9841 19.1784 26.7215 22.2266 24.4741 24.4741C22.7033 26.2448 20.4355 27.4042 17.9986 27.8164C16.9052 28.0013 16 28.8831 16 29.9921Z"/>
          </mask>
          <path d="M16 29.9921C16 31.101 16.9025 32.013 18.0027 31.8742C21.5077 31.4321 24.7891 29.8383 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68688 27.3137 4.68629C24.7891 2.1617 21.5077 0.5679 18.0027 0.125777C16.9025 -0.0130083 16 0.89898 16 2.00793C16 3.11688 16.9052 3.9987 17.9986 4.18364C20.4355 4.59583 22.7033 5.75521 24.4741 7.52593C26.7215 9.7734 27.9841 12.8216 27.9841 16C27.9841 19.1784 26.7215 22.2266 24.4741 24.4741C22.7033 26.2448 20.4355 27.4042 17.9986 27.8164C16.9052 28.0013 16 28.8831 16 29.9921Z" stroke="url(#paint0_linear_6021_264996)" strokeWidth="6" mask="url(#path-2-inside-1_6021_264996)"/>
          <defs>
            <linearGradient id="paint0_linear_6021_264996" x1="16" y1="-16" x2="-16" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor={theme === 'dark' ? '#38EF7D' : '#38EF7D'}/>
              <stop offset="1" stopColor={theme === 'dark' ? '#11998E' : '#11998E'}/>
            </linearGradient>
          </defs>
        </svg>
      }

      {step === 2 &&
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_6021_268451" fill="white">
            <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM4.01586 16C4.01586 22.6187 9.38134 27.9841 16 27.9841C22.6187 27.9841 27.9841 22.6187 27.9841 16C27.9841 9.38134 22.6187 4.01586 16 4.01586C9.38134 4.01586 4.01586 9.38134 4.01586 16Z"/>
          </mask>
          <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM4.01586 16C4.01586 22.6187 9.38134 27.9841 16 27.9841C22.6187 27.9841 27.9841 22.6187 27.9841 16C27.9841 9.38134 22.6187 4.01586 16 4.01586C9.38134 4.01586 4.01586 9.38134 4.01586 16Z" stroke="url(#paint0_linear_6021_268451)" strokeWidth="6" mask="url(#path-1-inside-1_6021_268451)"/>
          <defs>
            <linearGradient id="paint0_linear_6021_268451" x1="16" y1="-16" x2="-16" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38EF7D"/>
              <stop offset="1" stopColor="#11998E"/>
            </linearGradient>
          </defs>
        </svg>
      }
    </>
  )
}

export default Footer

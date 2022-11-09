import clsx from 'clsx'
import React, { useState } from 'react'

import { Button, Modal } from 'components/common'
import { AmericanExpress, ApplePay } from './PaymentIcon'
import { useTypedSelector } from 'hooks/useTypeSelector'

const ModalAddPayment = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('select-payment')

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={clsx(
          'bg-[#2160DC]/10 dark:bg-primary-950',
          'h-8 w-[52px] rounded-md',
          'text-caption font-medium text-primary-500'
        )}
      >{() => 'Edit'}</Button>
      <Modal
        isShow={isOpen}
        onClose={() => setIsOpen(false)}
        className={{
          modalContainer: 'max-w-[564px]',
          closeButton: 'top-3 right-3'
        }}
      >
        {step === 'select-payment' && <SelectPayment handleAddNewCard={() => setStep('add-new-payment')} />}
        {step === 'add-new-payment' && <AddNewPayment handleToBackSelectPayment={() => setStep('select-payment')} />}
      </Modal>
    </>
  )
}

const AddNewPayment = ({ handleToBackSelectPayment }:{
  handleToBackSelectPayment(e:any): void
}) => {
  return (
    <div className="pt-7 px-7 pb-14">
      <div className="flex items-center space-x-4">
        <Button
          onClick={handleToBackSelectPayment}
        >
          {() => (
            <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12L5 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Button>
        <div className="space-y-1">
          <h4 className="text-bodylarge font-bold text-text-500 dark:text-text-100">Add New Payment</h4>
          <p className="text-bodysmall font-medium text-text-200 dark:text-text-400">Select payment method</p>
        </div>
      </div>

      <div className="border border-divider-light-400 dark:border-divider-500 rounded-lg mt-5">
        <AddPaymentItem logoName="mastercard" paymentName="Mastercard"/>
        <AddPaymentItem logoName="visa" paymentName="Visa"/>
        <AddPaymentItem logoName="google-pay" paymentName="Google Pay" />
        <AddPaymentItem logoName="apple-pay" paymentName="Apple Pay" />
        <AddPaymentItem logoName="american-express" paymentName="American Express" />
      </div>
    </div>
  )
}

const AddPaymentItem = ({ logoName, paymentName }:{
  logoName: string
  paymentName: string
}) => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <div className={clsx(
      'grid grid-cols-[max-content_auto_max-content] gap-x-2 p-5',
      'items-center',
      'border-b border-b-divider-light-400 dark:border-b-divider-500',
      'last:border-none'
    )}>
      <img className="w-6" src={require(`./payment-icon/${theme}/${logoName}.png`)} alt=""/>
      <p className="text-bodymedium font-bold text-text-400 dark:text-text-100">{paymentName}</p>
      <Button className="text-caption font-bold text-primary-500">
        {() => 'Add Payment'}
      </Button>
    </div>
  )
}

const SelectPayment = ({ handleAddNewCard }:{
  handleAddNewCard(e: any): void
}) => {
  return (
    <>
      <div className="p-7 min-h-[332px]">
        <h4 className="text-bodylarge font-bold text-text-500 dark:text-text-100">Select Payment</h4>

        <div className="border border-divider-light-400 dark:border-divider-500 rounded-lg mt-5">
          <PaymentItem icon={<AmericanExpress/>} name="AmericanExpress" description="Expires 06/24" isSelected={true} />
          <PaymentItem icon={<ApplePay/>} name="Apple Pay" description="larryGo@apptunix.com"/>

          <Button
            onClick={handleAddNewCard}
            className={clsx(
              'flex space-x-2 items-center',
              'text-bodysmall font-medium text-primary-500',
              'py-4 px-5'
            )}
          >
            {() => (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.0013 0.666992C3.9513 0.666992 0.667969 3.95033 0.667969 8.00033C0.667969 12.0503 3.9513 15.3337 8.0013 15.3337C12.0513 15.3337 15.3346 12.0503 15.3346 8.00033C15.3346 3.95033 12.0513 0.666992 8.0013 0.666992ZM8.66797 10.667C8.66797 10.8438 8.59773 11.0134 8.47271 11.1384C8.34768 11.2634 8.17811 11.3337 8.0013 11.3337C7.82449 11.3337 7.65492 11.2634 7.5299 11.1384C7.40487 11.0134 7.33463 10.8438 7.33463 10.667V8.66699H5.33464C5.15782 8.66699 4.98826 8.59675 4.86323 8.47173C4.73821 8.34671 4.66797 8.17714 4.66797 8.00033C4.66797 7.82351 4.73821 7.65394 4.86323 7.52892C4.98826 7.4039 5.15782 7.33366 5.33464 7.33366H7.33463V5.33366C7.33463 5.15685 7.40487 4.98728 7.5299 4.86225C7.65492 4.73723 7.82449 4.66699 8.0013 4.66699C8.17811 4.66699 8.34768 4.73723 8.47271 4.86225C8.59773 4.98728 8.66797 5.15685 8.66797 5.33366V7.33366H10.668C10.8448 7.33366 11.0143 7.4039 11.1394 7.52892C11.2644 7.65394 11.3346 7.82351 11.3346 8.00033C11.3346 8.17714 11.2644 8.34671 11.1394 8.47173C11.0143 8.59675 10.8448 8.66699 10.668 8.66699H8.66797V10.667Z" fill="#2160DC"/>
                </svg>
                <span>Add a new card</span>
              </>
            )}
          </Button>
        </div>
      </div>

      <div className={clsx(
        'flex justify-end space-x-8',
        'py-4 px-7',
        'border-t border-t-divider-light-400 dark:border-t-divider-500'
      )}>
        <Button className="text-bodysmall font-bold text-text-200 dark:text-text-400">
          {() => 'Discard'}
        </Button>
        <Button className="text-bodysmall font-bold text-white dark:text-text-100 w-20 h-10 bg-primary-500 rounded-md">
          {() => 'Save'}
        </Button>
      </div>
    </>
  )
}

const PaymentItem = ({ icon, name, description, isSelected }:{
  icon: React.ReactNode
  name: string
  description: string
  isSelected?: boolean
}) => {
  return (
    <Button className={clsx(
      'w-full',
      'py-4 px-5',
      'gap-x-3 items-center',
      'grid grid-cols-[max-content_auto_max-content]',
      'border-b border-b-divider-light-400 dark:border-b-divider-500'
    )}>
      {() => (
        <>
          {icon}

          <div className="text-left">
            <h4 className="text-bodymedium font-bold text-text-400 dark:text-text-100">{name}</h4>
            <p className="text-caption font-medium text-text-200 dark:text-text-400">{description}</p>
          </div>

          {isSelected &&
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="fill-[#2160DC]/10 dark:fill-[#161D3F]" cx="14" cy="14" r="14" />
          <path d="M19.3346 10L12.0013 17.3333L8.66797 14" stroke="#2160DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          }
        </>
      )}
    </Button>
  )
}

export default ModalAddPayment

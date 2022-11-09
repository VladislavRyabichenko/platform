import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'

export interface IDetailMessage {
  isSent: boolean
  time: string
  messages: string[]
}

const DetailMessage = ({ handleBackButton }:{
  handleBackButton(e:any): void
}) => {
  const detailMessage: IDetailMessage[] = [
    {
      isSent: true,
      time: '21:39',
      messages: ['Data Successfully Submitted', 'Thinking that i missed something']
    },
    {
      isSent: false,
      time: '21:30',
      messages: ['Data Successfully Submitted', 'Thinking that i missed something']
    },
    {
      isSent: true,
      time: '21:32',
      messages: ['Thinking that i missed something', 'Nope']
    },
    {
      isSent: false,
      time: '21:35',
      messages: ['Thinking that i missed something']
    },
    {
      isSent: true,
      time: '21:39',
      messages: ['Thinking that i missed something', 'Measure of the ability of a particular ']
    },
    {
      isSent: false,
      time: '21:40',
      messages: ['Data Successfully Submitted', 'Generate profit instead of loss.']
    }
  ]

  return (
    <div className="">
      <Header handleBackButton={handleBackButton}/>

      <div className={clsx(
        'grid grid-flow-row auto-rows-max content-end',
        'px-5 pb-3 max-h-[444px]',
        'space-y-1',
        'overflow-scroll'
      )}>
        {detailMessage.map((propsItem, index) => {
          return (
            <GroupMessageItem key={index} {...propsItem}/>
          )
        })}
      </div>

      <FormSendMessage/>
    </div>
  )
}

const GroupMessageItem = ({ isSent, time, messages }: {
  isSent: boolean
  time: string,
  messages: string[]
}) => {
  return (
    <div className={clsx(
      'space-y-1',
      isSent && 'justify-self-end'
    )}>
      <div className="space-y-[2px]">
        {messages.map((message, index) => {
          return <MessageItem key={index} isSent={isSent} value={message}/>
        })}
      </div>

      <p className={clsx(
        'w-fit text-caption font-medium text-text-200 dark:text-text-400',
        isSent ? 'ml-auto' : 'mr-auto'
      )}>{time}</p>
    </div>
  )
}

const MessageItem = ({ isSent, value }:{
  isSent: boolean
  value: string
}) => {
  return (
    <div className={clsx(
      'w-fit py-2 px-3',
      isSent
        ? (
          `bg-black/[0.02] dark:bg-surface-300 ml-auto
          rounded-b-lg rounded-l-lg rounded-tr-sm`
        )
        : (
          `bg-primary-500 mr-auto
          rounded-b-lg rounded-r-lg rounded-tl-sm`
        )
    )}>
      <p className={clsx(
        'text-caption font-medium',
        isSent ? 'text-text-400 dark:text-text-200' : 'text-white'
      )}>{value}</p>
    </div>
  )
}

const Header = ({ handleBackButton }:{
  handleBackButton(e:any): void
}) => {
  return (
    <div className={clsx(
      'grid grid-cols-[max-content_auto_max-content] gap-x-3 items-center',
      'border-b',
      'border-b-divider-light-400 dark:border-b-divider-500',
      'py-[11px] px-[18px]'
    )}>
      <BackButton onClick={handleBackButton} />
      <div className="flex items-center space-x-2">
        <img className="h-8 w-8 rounded-full" src={require('assets/users/kyron-stuart.png')} alt="" />
        <p className="text-bodymedium font-bold text-text-400 dark:text-text-100">Kyron Stuart</p>
      </div>

      <p className="text-caption font-medium text-text-200 dark:text-text-400">Mentor</p>
    </div>
  )
}

const BackButton = ({ onClick }:{
  onClick(e: any): void
}) => {
  return (
    <Button onClick={onClick}>
      {() => (
        <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.668 8L3.33464 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12.667L3.33333 8.00032L8 3.33366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

const FormSendMessage = () => {
  return (
    <form className={clsx(
      'p-3 min-h-[80px]',
      'border-t border-t-divider-light-400 dark:border-t-divider-500',
      'grid auto-rows-min content-between'
    )}>
      <div className="flex items-start space-x-2">
        <textarea
          className={clsx(
            'w-full',
            'resize-none',
            'bg-transparent',
            'text-bodysmall font-medium',
            'text-black/60 dark:text-white/60',
            'placeholder:text-text-200 dark:placeholder:text-text-500',
            'focus:outline-none'
          )}
          placeholder="Write message..."
          rows={1}
        ></textarea>

        <Button className="text-bodysmall font-bold text-primary-500">
          {() => 'Send'}
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <EmoticonButton/>
        <UploadImageButton/>
        <OptionButton/>
      </div>
    </form>
  )
}

const EmoticonButton = () => {
  return (
    <Button>
      {() => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" clipPath="url(#clip0_2810_105455)">
            <path d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33203 9.33301C5.33203 9.33301 6.33203 10.6663 7.9987 10.6663C9.66536 10.6663 10.6654 9.33301 10.6654 9.33301" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6H6.00667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6H10.0067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2810_105455">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )}
    </Button>
  )
}

const UploadImageButton = () => {
  return (
    <Button>
      {() => (
        <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.66797 6.66699C6.22025 6.66699 6.66797 6.21928 6.66797 5.66699C6.66797 5.11471 6.22025 4.66699 5.66797 4.66699C5.11568 4.66699 4.66797 5.11471 4.66797 5.66699C4.66797 6.21928 5.11568 6.66699 5.66797 6.66699Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.9987 10.0003L10.6654 6.66699L3.33203 14.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

const OptionButton = () => {
  return (
    <Button>
      {() => (
        <svg className="stroke-[#999AA9] dark:stroke-[#4C4D5F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 13.3327V6.66602" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13.3337V2.66699" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 13.334V9.33398" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Button>
  )
}

export default DetailMessage

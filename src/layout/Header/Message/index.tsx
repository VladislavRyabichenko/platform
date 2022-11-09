import clsx from 'clsx'
import React, { useState } from 'react'

import { MessageIcon } from './Icon'
import InputSearch from './InputSearch'
import MessageItem from './MessageItem'
import DetailMessage from './DetailMessage'
import { Button, PopOver } from 'components/common'

import { IMessage } from './d.types'

const Message = ({ className }:{
  className: string
}) => {
  const messages: IMessage[] = [
    {
      imgSrc: require('assets/users/kyron-stuart.png'),
      name: 'Kyron Stuart',
      message: 'Thinking that i missed something',
      time: '10min ago',
      isRead: false
    },
    {
      imgSrc: require('assets/users/simon-reilly.png'),
      name: 'Simon O’Reilly',
      message: 'Are you kidding me?',
      time: '41m ago',
      isRead: true
    },
    {
      imgSrc: require('assets/users/michael-clarkson.png'),
      name: 'Michael Clarkson',
      message: 'Are you kidding me?',
      time: '2h ago',
      isRead: true
    },
    {
      imgSrc: require('assets/users/immanuel-ericson.png'),
      name: 'Immanuel Ericson',
      message: 'My pleasure',
      time: 'Yesterday',
      isRead: false
    },
    {
      imgSrc: require('assets/users/henderson-noah.png'),
      name: 'Henderson Noah',
      message: 'Takes a lot of time',
      time: 'Yesterday',
      isRead: false
    },
    {
      imgSrc: require('assets/users/alexis-happs.png'),
      name: 'Alexis Happs',
      message: 'Super Perfect',
      time: '2 days ago',
      isRead: false
    }
  ]

  const [isOpenDetailMessage, setIsOpenDetailMessage] = useState(false)

  return (
    <PopOver
      popOverButton={({ handleToggle }) =>
        <MessageButton className={className} handleToggle={handleToggle} />
      }
      className={{
        popOverContainer: clsx(
          'w-[400px]',
          'right-[-12px]',
          'mt-[14px]'
        )
      }}
    >
      {() =>
        isOpenDetailMessage
          ? <DetailMessage handleBackButton={() => setIsOpenDetailMessage(false)} />
          : <MessageListGroup messages={messages} handleOpenDetailMessage={() => setIsOpenDetailMessage(true)} />
      }
    </PopOver>
  )
}

const MessageButton = ({ className, handleToggle }:{
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
      {({ isHover }) => <MessageIcon isHover={isHover}/>}
    </Button>
  )
}

const MessageListGroup = ({ messages, handleOpenDetailMessage }:{
  messages: IMessage[]
  handleOpenDetailMessage(e: any): void
}) => {
  return (
    <div className="px-5 pt-4 pb-7">
      <h4 className="text-bodymedium font-bold text-text-400 dark:text-text-100 mb-4">Messages</h4>

      <InputSearch/>

      <div className="mt-6">
        {messages.map((itemProps, index) => {
          return (
            <MessageItem
              key={index}
              onClick={handleOpenDetailMessage}
              {...itemProps}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Message

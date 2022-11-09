import clsx from 'clsx'
import React from 'react'

import Tab from './Tab'
import IdeasCard from './IdeasCard'
import FormInputMyIdeas from './FormInput'
import Trending from './Trending'
import Hashtags from './HasTags'

const MyIdeas = () => {
  return (
    <div className="bg-surface-400 pt-6 px-10">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-bodylarge font-bold text-text-100">My Ideas</h4>
          <p className="text-bodysmall font-medium text-text-400">History of Your Post</p>
        </div>

        <div className={clsx(
          'bg-surface-400 rounded-md px-3',
          'flex items-center space-x-2',
          'border border-divider-400',
          'h-10 w-[259px]'
        )}>
          <SearchIcon/>
          <input
            className={clsx(
              'w-full',
              'bg-transparent',
              'text-bodysmall font-medium',
              'text-white/60 placeholder:text-text-500',
              'focus:outline-none'
            )}
            placeholder="Search trades..."
          />
        </div>
      </div>

      <div className={clsx(
        'grid grid-cols-[minmax(0px,100%)_minmax(0px,444px)]',
        'gap-x-10',
        'mt-6'
      )}>
        <div>
          <Tab/>
          <FormInputMyIdeas
            className="mt-5"
          />
          <div className="mt-3 space-y-3">
            <IdeasCard
              username="hai_pieter"
              time="2h"
              avatar={require('assets/users/william-john.png')}
              fullname="Haliza Pieter"
              content="The biggest problem I see with a day like today, everything is down, which means there are a lot of good companies that in the long run will be fine.  It's like a kid in a candy store, too many choices."
              isLiked={false}
              isReplies={true}
              isBanner={true}
            />
            <IdeasCard
              username="steve_nic"
              time="30m"
              avatar={require('assets/users/william-john.png')}
              fullname="Steven Nichole"
              content="Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow @jennymanydots -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining ?"
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />
            <IdeasCard
              username="steve_nic"
              time="30m"
              avatar={require('assets/users/william-john.png')}
              fullname="Steven Nichole"
              content="Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow @jennymanydots -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining ?"
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />
            <IdeasCard
              username="hai_pieter"
              time="2h"
              avatar={require('assets/users/william-john.png')}
              fullname="Haliza Pieter"
              content="The biggest problem I see with a day like today, everything is down, which means there are a lot of good companies that in the long run will be fine.  It's like a kid in a candy store, too many choices."
              isLiked={false}
              isReplies={true}
              isBanner={true}
            />
            <IdeasCard
              username="steve_nic"
              time="30m"
              avatar={require('assets/users/william-john.png')}
              fullname="Steven Nichole"
              content="Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow @jennymanydots -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining ?"
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />
            <IdeasCard
              username="steve_nic"
              time="30m"
              avatar={require('assets/users/william-john.png')}
              fullname="Steven Nichole"
              content="Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow @jennymanydots -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining ?"
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />
          </div>
        </div>

        <div>
          <Trending/>
          <Hashtags className="mt-6"/>
          <p className="w-fit text-bodysmall font-medium text-text-500 ml-auto mt-2">© 2022 Twitter, Inc.</p>
        </div>
      </div>
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#4C4D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0016 13.9996L11.1016 11.0996" stroke="#4C4D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default MyIdeas

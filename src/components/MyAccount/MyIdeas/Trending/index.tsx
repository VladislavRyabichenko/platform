import clsx from 'clsx'
import React from 'react'

const Trending = () => {
  return (
    <div>
      <h5 className="text-bodymedium font-bold text-[#9899A3]">Trending</h5>

      <div className="space-y-2 mt-2">
        <TrendingItem
          imgSrc={require('assets/trader-community/steven-nichole.png')}
          userName="steve_nic"
          name="Steven Nichole"
          follower="12,403"
        />
        <TrendingItem
          imgSrc={require('assets/trader-community/raul-castro.png')}
          userName="ra_castro"
          name="Raul Castro"
          follower="5,302"
        />
        <TrendingItem
          imgSrc={require('assets/trader-community/haliza-pieter.png')}
          userName="har_and"
          name="Harvard Anderson"
          follower="2,484"
        />
        <TrendingItem
          imgSrc={require('assets/trader-community/samuel-ananta.png')}
          userName="andrew_h"
          name="Andrew Haiz"
          follower="1,202"
        />
      </div>
    </div>
  )
}

const TrendingItem = ({ imgSrc, userName, name, follower }:{
  imgSrc: string
  userName: string
  name: string
  follower: string
}) => {
  return (
    <div className={clsx(
      'w-full',
      'flex items-center space-x-3',
      'border border-divider-500 rounded-lg',
      'px-[14px] py-4'
    )}>
      <Avatar src={imgSrc} />
      <div className="space-y-1">
        <h5 className="text-bodysmall space-x-1">
          <span className="font-bold text-text-100">{name}</span>
          <span className="font-medium text-text-400">@{userName}</span>
        </h5>
        <p className="text-bodysmall font-medium text-text-300">{follower} follower</p>
      </div>
    </div>
  )
}

const Avatar = ({ src }:{src: string}) => {
  return (
    <img className="w-8 h-8" src={src} alt="" />
  )
}

export default Trending

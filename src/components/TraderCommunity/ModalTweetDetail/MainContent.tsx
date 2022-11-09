import React from 'react'

const Avatar = () => {
  return (
    <img className="w-10 h-10 rounded-full" src={require('assets/trader-community/steven-nichole.png')} alt=""/>
  )
}

const MainContent = () => {
  return (
    <div className="px-7 pb-6">
      <div className="flex items-center space-x-3">
        <Avatar/>
        <p className="">
          <span className="block text-bodymedium font-bold text-text-400 dark:text-text-100">Steven Nichole</span>
          <span className="block text-bodysmall font-medium text-text-200 dark:text-text-400">@steve_nic</span>
        </p>
      </div>

      <p className="text-bodymedium font-normal text-text-400 dark:text-text-200 mt-4">
        Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow @jennymanydots -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining
      </p>

    </div>
  )
}

export default MainContent

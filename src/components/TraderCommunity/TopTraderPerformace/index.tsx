import React from 'react'
import Header from './Header'
import TraderItem from './TraderItem'

const TopTraderPerformace = () => {
  return (
    <div className="bg-white dark:bg-white/[0.06] rounded-xl">
      <Header/>
      <div className="py-4 px-5 space-y-2">
        <TraderItem src={require('./avatar/steven-nichole.png')} fullname="Steven Nichole" username="steve_nic" performance="+79.32%" />
        <TraderItem src={require('./avatar/raul-castro.png')} fullname="Raul Castro" username="ra_castro" performance="+80.23%" />
        <TraderItem src={require('./avatar/harvard-anderson.png')} fullname="Harvard Anderson" username="har_and" performance="+79.32%" />
        <TraderItem src={require('./avatar/andrew-haiz.png')} fullname="Andrew Haiz" username="andrew_h" performance="+79.32%" />
      </div>
    </div>
  )
}

export default TopTraderPerformace

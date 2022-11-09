import React from 'react'

import Header from './Header'
import TrendItem from './TrendItem'

const TrendForYou = () => {
  return (
    <div className="bg-white dark:bg-white/[0.06] rounded-xl">
      <Header/>
      <div className="space-y-3 px-5 pt-4 pb-6">
        <TrendItem amountTweet="12,500" titleTweet="asalways"/>
        <TrendItem amountTweet="3,210" titleTweet="up"/>
        <TrendItem amountTweet="2,520" titleTweet="breakit"/>
        <TrendItem amountTweet="1,008" titleTweet="closure"/>
        <TrendItem amountTweet="603" titleTweet="monolog"/>
      </div>
    </div>
  )
}

export default TrendForYou

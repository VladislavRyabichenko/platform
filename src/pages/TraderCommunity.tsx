import clsx from 'clsx'
import React from 'react'

import { FormSendTweet, InputSearch, Tab, TopTraderPerformace, TraderToFollow, TrendForYou, TweetCard } from 'components/TraderCommunity'

const TraderCommunity = () => {
  return (
    <div className={clsx(
      'w-full',
      'grid',
      'grid-flow-row xl:grid-flow-col',
      'auto-cols-auto',
      'sm:pt-4',
      'pb-5 sm:pb-10',
      'px-5 sm:px-6',
      'gap-x-5',
      'gap-y-3 sm:gap-y-5'
    )}>
      <div className={clsx(
        'w-full',
        'min-w-0'
      )}>
        <InputSearch/>

        <div className="mt-5 sm:mt-6">
          <Tab className="mb-5 sm:mb-3"/>
          <FormSendTweet className="mb-5 sm:mb-3"/>

          <div className="space-y-3 sm:space-y-2">
            <TweetCard
              username="steve_nic"
              time="30m"
              avatar={require('assets/trader-community/steven-nichole.png')}
              fullname="Steven Nichole"
              content="Are the only two sectors i would be buying in this massacre. Tech is so universally covered and understood in this forum, but for anyone wanting more on commodities follow <span style>@jennymanydots</span> -  the super cycle is coming and we need to get educated. anyone else on here doing good work on mining ?"
              isLiked={true}
              isReplies={true}
              isBanner={false}
            />
            <TweetCard
              username="hai_pieter"
              time="2h"
              avatar={require('assets/trader-community/haliza-pieter.png')}
              fullname="Haliza Pieter"
              content="The biggest problem I see with a day like today, everything is down, which means there are a lot of good companies that in the long run will be fine.  It's like a kid in a candy store, too many choices."
              isLiked={false}
              isReplies={false}
              isBanner={true}
            />

            <TraderToFollow/>

            <TweetCard
              username="burg_nat"
              time="1h"
              avatar={require('assets/trader-community/natalie-burg.png')}
              fullname="Natalie Burg"
              content={`I just found out that Mohnish Pabrai has his Chai with Pabrai on Spotify as a podcast and I thought some of you might find it interesting and want to check it out.

              (It’s basically all/some kind of form of interviews with MP)`}
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />

            <TweetCard
              username="steve_nic"
              time="1h"
              avatar={require('assets/trader-community/steven-nichole2.png')}
              fullname="Steven Nichole"
              content="Hendrerit elit vitae ut egestas. Proin varius risus sed amet odio amet, sed ornare arcu. Tincidunt sed consectetur turpis amet donec dictum egestas. Eu magna convallis volutpat in magna amet proin eu venenatis. "
              isLiked={false}
              isReplies={true}
              isBanner={false}
            />
          </div>

        </div>
      </div>

      <div className={clsx(
        'grid',
        'gap-3',
        'auto-rows-max',
        'auto-cols-auto',
        'grid-flow-row lg:grid-flow-col xl:grid-flow-row',
        'w-full sm:min-w-[364px]'
      )}>
        <TrendForYou/>
        <TopTraderPerformace/>
      </div>
    </div>
  )
}

export default TraderCommunity

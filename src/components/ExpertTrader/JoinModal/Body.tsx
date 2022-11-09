import clsx from 'clsx'
import React from 'react'

const Body = () => {
  return (
    <div className="px-7 pt-5 pb-12">
      <h2 className="text-h3 font-bold text-text-500 dark:text-text-100">Be an Expert Trader</h2>

      <Overview/>
      <GroupList
        title="Perks of Being an Expert Trader:"
        list={[
          {
            title: 'Show off your expertise',
            description: 'Show your excellent trading skills to the world and get some street cred.'
          },
          {
            title: 'Teach your subscribers',
            description: 'Expert Traders give their subscribers a life-changing chance to prosper by letting their market moves become educational materials.'
          },
          {
            title: 'Get attractive compensation packages',
            description: 'Be compensated for your contribution to the TRYNDx community and gain up to 80% revenue share.'
          },
          {
            title: 'Raise and expand your community',
            description: 'Lastly, you can help foster a healthy community of traders by being a role model for beginners.'
          }
        ]}
      />
      <GroupList
        title="Requirements to Apply as an Expert Trader:"
        list={[
          {
            title: 'Sign up with TRYNDx account',
            description: 'Ensure that you have a fully-registered TRYNDx account.'
          },
          {
            title: 'Connect your stock broker account',
            description: 'Your TRYNDx account can connect with most of the top brokerages. You need to connect your trading account to the TRYNDx platform so that we can confirm that everything is legitimate.'
          },
          {
            title: 'Apply to become an Expert Trader',
            description: 'Once you send in your application, we will review your profile carefully for eligibility and wait for a response.'
          }
        ]}
      />
    </div>
  )
}

const Overview = () => {
  return (
    <div className="mt-5 space-y-2">
      <p className="text-caption font-medium text-text-200 dark:text-text-400">Overview</p>
      <p className="text-bodysmall font-normal text-text-400 dark:text-text-300">Expert Traders are TRYNDx’s secret weapon. As an Expert Trader, you will use your skills and knowledge in market analysis and decision-making to serve as a guiding figure for subscribers to become better traders and to lift the heavy daily tasks from them.</p>
    </div>
  )
}

const GroupList = ({ title, list }:{
  title: string
  list: {
    title: string
    description: string
  }[]
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-bodylarge font-bold text-text-400 dark:text-text-100">{title}</h2>
      <ul className={clsx(
        'list-disc marker:text-text-100 marker:text-[14px] ml-5',
        'space-y-4',
        'mt-4'
      )}>
        {list.map(({ title, description }, index) => {
          return (
            <ListItem
              key={index}
              title={title}
              description={description}
            />
          )
        })}
      </ul>
    </div>
  )
}

const ListItem = ({ title, description }:{
  title: string
  description: string
}) => {
  return (
    <li>
      <span className="block text-bodysmall font-medium text-text-500 dark:text-text-100">{title}</span>
      <span className="block text-bodysmall font-normal text-[#8F8F9B]">{description}</span>
    </li>
  )
}

export default Body

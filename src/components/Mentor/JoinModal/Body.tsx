import clsx from 'clsx'
import React from 'react'

const Body = () => {
  return (
    <div className="px-7 pt-5 pb-12">
      <h2 className="text-h3 font-bold text-text-500 dark:text-text-100">Be an Expert Mentor</h2>

      <Overview/>
      <GroupList
        title="Perks of Being a Mentor:"
        list={[
          {
            title: 'Assist beginner traders',
            description: 'TRYNDx Mentors get access to their subscribers’ dashboards to give performance recommendations that will improve their trading performance.'
          },
          {
            title: 'Grow a following',
            description: 'Expert Traders give their subscribers a life-changing chance to prosper by letting their market moves become educational materials.'
          },
          {
            title: 'Get access to multiple income sources',
            description: 'Mentors can have multiple streams of income, such as direct compensation, streaming up to 80% of revenue share.'
          }
        ]}
      />
      <GroupList
        title="Requirements to Apply as a Mentor:"
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
            title: 'Apply to become an Expert Mentor',
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
      <p className="text-bodysmall font-normal text-text-400 dark:text-text-300">TRYNDx Mentors are partners in creating the ultimate trading experience. As a Mentor, you’ll dispense valuable advices, guidance and go on critical one-on-one consulting sessions with subscribers, helping them grow as traders. In exchange, you get to enjoy multiple benefits and income opportunities.</p>
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
      <h2 className="text-bodylarge font-bold text-text-500 dark:text-text-100">{title}</h2>
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
      <span className="block text-bodysmall font-normal text-text-400">{description}</span>
    </li>
  )
}

export default Body

import Verified from 'assets/leaderboard/icon/Verified'
import clsx from 'clsx'
import React from 'react'

const UserInformation = () => {
  return (
    <div className={clsx(
      'grid grid-flow-col auto-cols-max gap-x-[22px]',
      'items-center'
    )}>
      <img className="w-20 h-20" src={require('./avatar.png')} alt=""/>

      <div className="max-w-[435px]">
        <h3 className="text-h4 font-bold text-text-100">
          Maudy Almiray <Verified className="inline"/>
        </h3>
        <p className="text-bodysmall font-medium text-text-400">Trader and Mentor for over 9 years. I trade mainly stocks with a proven successful strategies</p>
      </div>
    </div>
  )
}

export default UserInformation

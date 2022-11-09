import clsx from 'clsx'
import React from 'react'

const Avatar = ({ nation } : {
  nation:string
}) => {
  return (
    <div className="relative w-fit h-9">
      <img className="w-8 h-8" src={require('./avatar.png')} alt=""/>
      <img className={clsx(
        'relative',
        'w-[10.67px] rounded-sm',
        'border-[1.5px] border-surface-400',
        'mx-auto',
        'box-content',
        'top-[-6px]'
      )} src={require(`assets/icon/Flags/${nation}.png`)} alt=""/>
    </div>
  )
}

export default Avatar

import React from 'react'

const Avatar = ({ src }:{ src:string }) => {
  return (
    <div className="mt-2">
      <div className="w-8 h-8">
        <img className="w-full" src={src} alt=""/>
      </div>
    </div>
  )
}

export default Avatar

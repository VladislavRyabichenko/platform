import React, { useState } from 'react'

interface Props {
  id?: string;
  className?: string;
  onClick?(e:any): void;
  onMouseEnter?(e:any): void;
  onMouseLeave?(e:any): void;
  children: ({
    isHover
  }:{
    isHover: boolean
  }) => React.ReactNode
}

const Button = ({ id, className, onClick, onMouseEnter, onMouseLeave, children } : Props) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      onMouseEnter={(e) => {
        onMouseEnter?.(e)
        setIsHover(true)
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e)
        setIsHover(false)
      }}
    >
      {children({ isHover })}
    </button>
  )
}

export default Button

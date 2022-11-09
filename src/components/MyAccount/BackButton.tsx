import React from 'react'
import { useNavigate } from 'react-router'

import { Button } from 'components/common'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate('/')}
      className="flex items-center space-x-2"
    >
      {() => (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.668 8L3.33464 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12.667L3.33333 8.00032L8 3.33366" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-bodysmall font-bold text-white">Back to home</p>
        </>
      )}
    </Button>
  )
}

export default BackButton

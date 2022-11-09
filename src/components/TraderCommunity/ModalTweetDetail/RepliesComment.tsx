import { Button } from 'components/common'
import React from 'react'

const RepliesComment = ({ isReplies }: {isReplies:boolean}) => {
  return (
    <Button className="flex items-center gap-x-2">
      {() => (
        <>
          <Icon/>
          <p className="text-caption font-medium text-text-300 dark:text-text-400">
        5 {isReplies ? 'replies' : 'comments'}
          </p>
        </>
      )}
    </Button>
  )
}

const Icon = () => {
  return (
    <svg className="stroke-icon-light-500 dark:stroke-icon-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1302 4.16732V7.5673C15.1302 8.41397 14.8502 9.12731 14.3502 9.62065C13.8569 10.1206 13.1435 10.4006 12.2969 10.4006V11.6073C12.2969 12.0606 12.2969 12.3147 11.4169 12.0806C10.5369 11.8466 9.77021 11.654 9.77021 11.654C9.83021 11.4473 9.85687 11.2206 9.85687 10.9806V8.26733C9.85687 6.90733 8.95021 6.00065 7.59021 6.00065H4.06354C3.9702 6.00065 3.88354 6.00733 3.79688 6.014V4.16732C3.79688 2.46732 4.93021 1.33398 6.63021 1.33398H12.2969C13.9969 1.33398 15.1302 2.46732 15.1302 4.16732Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.85687 8.26668V10.98C9.85687 11.22 9.83021 11.4467 9.77021 11.6533C9.52355 12.6333 8.71021 13.2467 7.59021 13.2467H5.77688L3.76354 14.5867C3.46354 14.7933 3.06354 14.5733 3.06354 14.2133V13.2467C2.38354 13.2467 1.81688 13.02 1.42354 12.6267C1.02354 12.2267 0.796875 11.66 0.796875 10.98V8.26668C0.796875 7.00002 1.58354 6.12668 2.79688 6.01335C2.88354 6.00668 2.9702 6 3.06354 6H7.59021C8.95021 6 9.85687 6.90668 9.85687 8.26668Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default RepliesComment

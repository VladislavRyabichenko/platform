import clsx from 'clsx'
import React from 'react'

import FormSendTweet from '../FormSendTweet'
import GroupAction from './GroupAction'
import MainContent from './MainContent'
import RepliesItem from './RepliesItem'

import { Modal } from 'components/common'

const ModalTweetDetail = ({ isOpen, onClose }:{
  isOpen: boolean
  onClose(e: any): void
}) => {
  return (
    <Modal
      isShow={isOpen}
      className={{
        rootContainer: 'pt-10 pb-0',
        modalContainer: clsx(
          'pt-[30px] h-full max-w-[564px]',
          'border-0 dark:border'
        )
      }}
      onClose={onClose}
    >
      <div className="relative">
        <MainContent/>
        <GroupAction/>
      </div>

      <div className="relative px-7 py-4 h-full overflow-y-scroll">
        <FormSendTweet className="" />
        <div className="mt-4">
          <RepliesItem
            id="samuel-ananta"
            name="Samuel Ananta"
            username="@ananta_sam"
            replies={`Thanks <span class="text-warning-500">@steve_nic</span>, more to come tomorrow.
              
              Regarding reserve, they are mostly a branding thing imo, not a real driver of growth, but would be interesting to see numbers for those stores.`}
          />

          <RepliesItem
            id="haliza-pieter"
            name="Haliza Pieter"
            username="@hai_pieter"
            replies="The biggest problem I see with a day like today, everything is down, which means there are a lot of good companies that in the long run will be fine.  It's like a kid in a candy store, too many choices."
          />

          <RepliesItem
            id="raul-castro"
            name="Raul Castro"
            username="@ra_castro"
            replies={`Another titillating piece, Conor. A couple of questions:
              1. Was the phrase, "...has enacted several price events.." yours or theirs? It's a somewhat nebulous way of saying 'raising prices.'
              2. Do you know how they're estimating the 55% ROI figure?`}
          />

          <div className="h-[230px] w-full"></div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalTweetDetail

import React from 'react'

import { Button } from 'components/common'
import clsx from 'clsx'

const ActionButton = () => {
  return (
    <div className="space-x-2">
      <Button className={clsx(
        'bg-primary-950 rounded-[4px]',
        'h-10 w-[161px]',
        'space-x-2'
      )}>
        {() => (
          <>
            <MessageIcon/>
            <p className="inline text-primary-500 text-bodysmall font-bold">Send Messages</p>
          </>
        )}
      </Button>

      <Button className={clsx(
        'h-10 w-[120px]',
        'bg-primary-500 rounded-[4px]',
        'text-bodysmall font-bold text-white'
      )}>
        {() => 'Consultation'}
      </Button>
    </div>
  )
}

const MessageIcon = () => {
  return (
    <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6654 2H3.33203C2.8016 2 2.29289 2.21071 1.91782 2.58579C1.54274 2.96086 1.33203 3.46957 1.33203 4V14C1.33223 14.1181 1.36382 14.2341 1.42356 14.336C1.48331 14.4379 1.56905 14.5221 1.67203 14.58C1.77167 14.6365 1.88417 14.6663 1.9987 14.6667C2.11835 14.6666 2.23579 14.6344 2.3387 14.5733L5.33203 12.76C5.44268 12.6941 5.57003 12.6617 5.6987 12.6667H12.6654C13.1958 12.6667 13.7045 12.456 14.0796 12.0809C14.4547 11.7058 14.6654 11.1971 14.6654 10.6667V4C14.6654 3.46957 14.4547 2.96086 14.0796 2.58579C13.7045 2.21071 13.1958 2 12.6654 2ZM5.33203 8C5.20018 8 5.07128 7.9609 4.96165 7.88765C4.85202 7.81439 4.76657 7.71027 4.71611 7.58846C4.66565 7.46664 4.65245 7.33259 4.67817 7.20327C4.7039 7.07395 4.76739 6.95516 4.86063 6.86193C4.95386 6.76869 5.07265 6.7052 5.20197 6.67948C5.33129 6.65375 5.46534 6.66696 5.58715 6.71741C5.70897 6.76787 5.81309 6.85332 5.88634 6.96295C5.9596 7.07259 5.9987 7.20148 5.9987 7.33333C5.9987 7.51014 5.92846 7.67971 5.80344 7.80474C5.67841 7.92976 5.50884 8 5.33203 8ZM7.9987 8C7.86684 8 7.73795 7.9609 7.62832 7.88765C7.51868 7.81439 7.43324 7.71027 7.38278 7.58846C7.33232 7.46664 7.31912 7.33259 7.34484 7.20327C7.37056 7.07395 7.43406 6.95516 7.52729 6.86193C7.62053 6.76869 7.73932 6.7052 7.86864 6.67948C7.99796 6.65375 8.132 6.66696 8.25382 6.71741C8.37564 6.76787 8.47976 6.85332 8.55301 6.96295C8.62627 7.07259 8.66536 7.20148 8.66536 7.33333C8.66536 7.51014 8.59513 7.67971 8.4701 7.80474C8.34508 7.92976 8.17551 8 7.9987 8ZM10.6654 8C10.5335 8 10.4046 7.9609 10.295 7.88765C10.1854 7.81439 10.0999 7.71027 10.0494 7.58846C9.99899 7.46664 9.98578 7.33259 10.0115 7.20327C10.0372 7.07395 10.1007 6.95516 10.194 6.86193C10.2872 6.76869 10.406 6.7052 10.5353 6.67948C10.6646 6.65375 10.7987 6.66696 10.9205 6.71741C11.0423 6.76787 11.1464 6.85332 11.2197 6.96295C11.2929 7.07259 11.332 7.20148 11.332 7.33333C11.332 7.51014 11.2618 7.67971 11.1368 7.80474C11.0117 7.92976 10.8422 8 10.6654 8Z" fill="#2160DC"/>
    </svg>
  )
}

export default ActionButton

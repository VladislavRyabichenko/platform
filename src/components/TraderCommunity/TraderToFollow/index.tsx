import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import clsx from 'clsx'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Keyboard } from 'swiper'

import ProfileCard from './ProfileCard'

const TraderToFollow = () => {
  const data = [
    {
      avatar: require('./avatar/steven-nichole-1.png'),
      fullname: 'Steven Nichole',
      username: 'steve_nic'
    },
    {
      avatar: require('./avatar/nauru-sauk.png'),
      fullname: 'Nauru Sauk',
      username: 'nauru_sauk'
    },
    {
      avatar: require('./avatar/abdul-hanavi.png'),
      fullname: 'Abdul Hanavi',
      username: 'hanavi_abd'
    },
    {
      avatar: require('./avatar/steven-nichole-2.png'),
      fullname: 'Steven Nichole',
      username: 'steve_nic'
    }
  ]

  return (
    <div className={clsx(
      'relative w-full',
      'bg-white dark:bg-surface-400 rounded-xl',
      'px-5 pt-3 pb-4',
      'overflow-hidden'
    )}>
      <h4 className="w-fit text-bodymedium font-bold text-[#9899A3] dark:text-text-300">Traders to Follow</h4>

      <Swiper
        id=""
        className="w-[100%] mt-3 cursor-grab"
        style={{
          overflow: 'visible'
        }}
        spaceBetween={8}
        slidesPerView="auto"
        onSwiper={(swiper) => console.log(swiper)}
        keyboard={true}
        loop={false}
        speed={750}
        modules={[Autoplay, Navigation, Keyboard]}
      >
        {data.map(({ avatar, fullname, username }, index) => {
          return (
            <SwiperSlide key={index} className="!w-fit">
              <ProfileCard
                avatar={avatar}
                fullname={fullname}
                username={username}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TraderToFollow

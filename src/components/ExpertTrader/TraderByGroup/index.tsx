import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import clsx from 'clsx'
import React from 'react'

import Header from './Header'
import MentorCard from './TraderCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

const TraderByGroup = ({
  id,
  header,
  mentors
}:{
  id: string
  header: {
    title: string
    description: string
  }
  mentors: {
    name: string,
    profitLoss: string,
    monthlyProfitLoss: string,
    winRate: string,
    numberOfTrade: number
    isProfit: boolean
  }[]
}) => {
  return (
    <div className={clsx(
      'w-full grid gap-x-6',
      'pl-5 md:pl-6',
      'mt-8 xl:mt-5',
      'grid-cols-1 xl:grid-cols-[min-content_minmax(0%,100%)]'
    )}>
      <Header
        id={id}
        title={header.title}
        description={header.description}
      />

      <Swiper
        id=""
        className="w-[100%] mt-0 cursor-grab"
        style={{
          // overflow: 'visible'
        }}
        spaceBetween={12}
        slidesPerView='auto'
        onSwiper={(swiper) => console.log(swiper)}
        keyboard={false}
        loop={false}
        speed={750}
        modules={[Autoplay, Navigation]}
        navigation={{ prevEl: `.prev-button-${id}`, nextEl: `.next-button-${id}` }}
      >
        {mentors.map(({ name, profitLoss, monthlyProfitLoss, winRate, numberOfTrade, isProfit }, index) => {
          return (
            <SwiperSlide key={index} className="!w-fit">
              <MentorCard
                name={name}
                profitLoss={profitLoss}
                monthlyProfitLoss={monthlyProfitLoss}
                winRate={winRate}
                numberOfTrade={numberOfTrade}
                isProfit={isProfit}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TraderByGroup

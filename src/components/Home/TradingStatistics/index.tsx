import clsx from 'clsx'
import { useTypedSelector } from 'hooks/useTypeSelector'
import React from 'react'

import Header from './Header'
import Item from './Item'

const TradingStatistics = ({ className }:{
  className: string
}) => {
  return (
    <div className={clsx(
      'dark:bg-white/[0.06] bg-white',
      'rounded-xl py-4',
      'xl:min-w-[364px]',
      className
    )}>
      <Header/>

      <div className="space-y-8 mt-4 px-6">
        <Item
          label="Win/Loss"
          value="0.70"
          isProfit={false}
          circle={LossCircle}
          description="The Win/Loss ratio tells you how many times you will have successful, money-making trades relative to how many times they'll lose money in your trades."
        />
        <Item
          label="Profit/Loss"
          value="1.40"
          isProfit={true}
          circle={ProfitCircle}
          description="Profit/Loss ratio is calculated by taking the average profit from all winning trades divided by the average losses on all losing trades over an arbitrary period of time"
        />
      </div>
    </div>
  )
}

const LossCircle = () => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_1288_4580" fill="white">
        <path d="M132 66C132 102.451 102.451 132 66 132C29.5492 132 0 102.451 0 66C0 29.5492 29.5492 0 66 0C102.451 0 132 29.5492 132 66ZM6.6 66C6.6 98.8057 33.1943 125.4 66 125.4C98.8057 125.4 125.4 98.8057 125.4 66C125.4 33.1943 98.8057 6.6 66 6.6C33.1943 6.6 6.6 33.1943 6.6 66Z"/>
      </mask>
      <path d="M132 66C132 102.451 102.451 132 66 132C29.5492 132 0 102.451 0 66C0 29.5492 29.5492 0 66 0C102.451 0 132 29.5492 132 66ZM6.6 66C6.6 98.8057 33.1943 125.4 66 125.4C98.8057 125.4 125.4 98.8057 125.4 66C125.4 33.1943 98.8057 6.6 66 6.6C33.1943 6.6 6.6 33.1943 6.6 66Z" fill={theme === 'dark' ? '#2C2D43' : '#F0F0F5'} stroke={theme === 'dark' ? '#15162E' : '#F0F0F5'} strokeWidth="4" mask="url(#path-1-inside-1_1288_4580)"/>
      <path d="M66 3.3C66 1.47746 64.5214 -0.00860821 62.7011 0.0824422C47.8754 0.824029 33.695 6.54708 22.4858 16.3763C10.4475 26.9324 2.65705 41.5047 0.565542 57.3784C-1.52597 73.2522 2.22413 89.345 11.1172 102.659C19.398 115.056 31.612 124.257 45.7396 128.813C47.4742 129.373 49.2873 128.32 49.7594 126.56V126.56C50.2314 124.8 49.1832 122.999 47.4518 122.43C34.8699 118.295 23.9968 110.059 16.6055 98.9931C8.60172 87.0105 5.22663 72.527 7.10899 58.2406C8.99135 43.9542 16.0028 30.8392 26.8372 21.3387C36.8424 12.5653 49.4778 7.42674 62.7013 6.69161C64.5211 6.59044 66 5.12254 66 3.3V3.3Z" fill="#E93A6F"/>
    </svg>
  )
}

const ProfitCircle = () => {
  const { theme } = useTypedSelector(state => state.generalFunction)

  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_1288_4580" fill="white">
        <path d="M132 66C132 102.451 102.451 132 66 132C29.5492 132 0 102.451 0 66C0 29.5492 29.5492 0 66 0C102.451 0 132 29.5492 132 66ZM6.6 66C6.6 98.8057 33.1943 125.4 66 125.4C98.8057 125.4 125.4 98.8057 125.4 66C125.4 33.1943 98.8057 6.6 66 6.6C33.1943 6.6 6.6 33.1943 6.6 66Z"/>
      </mask>
      <path d="M132 66C132 102.451 102.451 132 66 132C29.5492 132 0 102.451 0 66C0 29.5492 29.5492 0 66 0C102.451 0 132 29.5492 132 66ZM6.6 66C6.6 98.8057 33.1943 125.4 66 125.4C98.8057 125.4 125.4 98.8057 125.4 66C125.4 33.1943 98.8057 6.6 66 6.6C33.1943 6.6 6.6 33.1943 6.6 66Z" fill={theme === 'dark' ? '#2C2D43' : '#F0F0F5'} stroke={theme === 'dark' ? '#15162E' : '#F0F0F5'} strokeWidth="4" mask="url(#path-1-inside-1_1288_4580)"/>
      <path d="M66 3.3C66 1.47746 64.5215 -0.0086062 62.7013 0.0824812C53.7137 0.532228 44.9006 2.81604 36.8089 6.8064C27.7294 11.2839 19.8015 17.7902 13.6387 25.8217C7.47583 33.8533 3.24319 43.195 1.26817 53.124C-0.706842 63.0531 -0.371281 73.3034 2.2489 83.0821C4.86907 92.8607 9.70363 101.906 16.3786 109.517C23.0535 117.128 31.3899 123.102 40.7429 126.976C50.0959 130.85 60.2147 132.521 70.3166 131.859C79.3194 131.269 88.0936 128.84 96.102 124.736C97.7239 123.904 98.2613 121.878 97.35 120.3V120.3C96.4387 118.721 94.4242 118.19 92.7977 119.012C85.6697 122.615 77.8774 124.749 69.8849 125.273C60.7932 125.869 51.6863 124.365 43.2686 120.878C34.8509 117.392 27.3482 112.015 21.3407 105.165C15.3333 98.315 10.9822 90.1746 8.62401 81.3738C6.26585 72.5731 5.96384 63.3478 7.74136 54.4116C9.51887 45.4755 13.3283 37.068 18.8748 29.8396C24.4214 22.6112 31.5564 16.7556 39.7281 12.7258C46.9116 9.18322 54.727 7.13513 62.7016 6.69164C64.5214 6.59044 66 5.12254 66 3.3V3.3Z" fill="url(#paint0_linear_1288_4580)"/>
      <defs>
        <linearGradient id="paint0_linear_1288_4580" x1="66" y1="-66" x2="-66" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38EF7D"/>
          <stop offset="1" stopColor="#11998E"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TradingStatistics

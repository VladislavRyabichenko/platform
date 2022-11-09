import clsx from 'clsx'
import React from 'react'

import { CalendarHeatMap, Cumulative, Distribution, SmallCard, TradeEvaluation, TradeEvaluationChart, TradingPerformance, TradingStatistics } from 'components/Home'

import { useTypedSelector } from 'hooks/useTypeSelector'

const Home = () => {
  const { statistic } = useTypedSelector((state) => state.statistics)

  return (
    <div className={clsx(
      'px-5 md:px-6',
      'mt-4 mb-10 space-y-5'
    )}>
      <div className={clsx(
        'grid',
        'grid-cols-2 lg:grid-cols-4',
        'justify-between',
        'gap-x-5',
        'gap-y-4'
      )}>
        <SmallCard title="Overall Return" value="$4,590" isProfit={true} dataKey="value" chartData={statistic.overallReturn} />
        <SmallCard title="Winning %" value="78%" isProfit={false} dataKey="value" chartData={statistic.winningRate} />
        <SmallCard title="Avg. Return $" value="$245" isProfit={true} dataKey="currency" chartData={statistic.averageReturn} />
        <SmallCard title="Average Return %" value="46%" isProfit={true} dataKey="rate" chartData={statistic.averageReturn} />
      </div>

      <div className={clsx(
        'grid w-full',
        'grid-areas-home-layout-mobile md:grid-areas-home-layout-tablet xl:grid-areas-home-layout-desktop',
        'gap-5'
      )}>
        <TradingPerformance className="grid-in-trading-performance"/>
        <TradingStatistics className="grid-in-trading-statistic"/>

        <Cumulative className="grid-in-cumulative"/>
        <Distribution className="grid-in-distribution"/>
        <CalendarHeatMap className="grid-in-calendar-heatmap"/>

        <TradeEvaluationChart className="grid-in-trade-evaluation-chart"/>
        <TradeEvaluation className="grid-in-trade-evaluation"/>
      </div>
    </div>
  )
}

export default Home

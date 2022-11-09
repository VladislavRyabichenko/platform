export interface ExpertTraderEntities {
  'best-performance': {
    title: string,
    description: string
    mentors: {
      name: string,
      profitLoss: string,
      monthlyProfitLoss: string,
      winRate: string,
      numberOfTrade: number
      isProfit: boolean
    }[]
  },
  'mentors-of-this-week': {
    title: string,
    description: string
    mentors: {
      name: string,
      profitLoss: string,
      monthlyProfitLoss: string,
      winRate: string,
      numberOfTrade: number
      isProfit: boolean
    }[]
  }
}

const dataExpertTraders : ExpertTraderEntities = {
  'best-performance': {
    title: 'Best Performance',
    description: 'Know how your idol traders are doing',
    mentors: [
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Maudy Almiray',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: false
      },
      {
        name: 'Kate Anastasya',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      }
    ]
  },
  'mentors-of-this-week': {
    title: 'Mentors of this week!',
    description: 'Mentors topping the weekly charts with the highest profits and growth',
    mentors: [
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Maudy Almiray',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Kate Anastasya',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: false
      },
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      },
      {
        name: 'Hafizh Sulthan',
        profitLoss: '$20,124.80',
        monthlyProfitLoss: '$1,030.10',
        winRate: '40.21%',
        numberOfTrade: 120,
        isProfit: true
      }
    ]
  }
}

export default dataExpertTraders

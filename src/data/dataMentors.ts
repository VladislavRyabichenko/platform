export interface MentorsEntities {
  'followed-mentor': {
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

const dataMentors : MentorsEntities = {
  'followed-mentor': {
    title: 'Followed Mentors',
    description: 'Know how your idol mentors are doing',
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
  'best-performance': {
    title: 'Best Performance',
    description: 'Mentors with the highest win rates and outstanding performance',
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

export default dataMentors

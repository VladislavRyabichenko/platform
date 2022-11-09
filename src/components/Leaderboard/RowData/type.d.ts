export interface IRowData {
  data:{
    ranking:number
    name: {
      nation:string
      text:string
      isVerified:boolean
    }
    numberOfTrade: string
    winRate: string
    totalPL: {
      trends: string
      currency: string
      percentage: string
    }
    todayPL: {
      trends: string
      currency: string
      percentage: string
    }
    followers: string
    performance: string
  }
}

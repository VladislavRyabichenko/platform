import data from './data.json'

import { Action, ActionType } from './actionTypes'

export interface ExpertTrader {
  ranking: number,
  name: {
    nation: string,
    text: string,
    isVerified: boolean
  },
  numberOfTrade: string,
  winRate: string,
  totalPL: {
    trends: string,
    currency: string,
    percentage: string
  },
  todayPL: {
    trends: string,
    currency: string,
    percentage: string
  },
  followers: string,
  performance: string
}

interface State {
  expertTrader: ExpertTrader[],
  loading: boolean,
  error: string | null
}

const initialState : State = {
  expertTrader: data,
  loading: false,
  error: null
}

const expertTraderReducer = (state:State = initialState, action: Action):State => {
  switch (action.type) {
  case ActionType.GET_EXPERT_TRADER_PENDING:
    return {
      loading: true,
      expertTrader: [],
      error: null
    }

  case ActionType.GET_EXPERT_TRADER_SUCCESS:
    return {
      loading: false,
      expertTrader: action.payload,
      error: null
    }

  case ActionType.GET_EXPERT_TRADER_FAIL:
    return {
      loading: false,
      expertTrader: [],
      error: action.payload
    }

  default:
    return state
  }
}

export default expertTraderReducer

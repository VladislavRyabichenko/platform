import data from './data.json'

import { Action, ActionType } from './actionTypes'

export interface Leaderboard {
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
  leaderboard: Leaderboard[],
  loading: boolean,
  error: string | null
}

const initialState : State = {
  leaderboard: data,
  loading: false,
  error: null
}

const leaderboardReducer = (state: State = initialState, action: Action):State => {
  switch (action.type) {
  case ActionType.GET_LEADERBOARD_PENDING:
    return {
      loading: true,
      leaderboard: [],
      error: null
    }

  case ActionType.GET_LEADERBOARD_SUCCESS:
    return {
      loading: false,
      leaderboard: action.payload,
      error: null
    }

  case ActionType.GET_LEADERBOARD_FAIL:
    return {
      loading: false,
      leaderboard: [],
      error: action.payload
    }

  default:
    return state
  }
}

export default leaderboardReducer

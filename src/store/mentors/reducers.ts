import data from './data.json'

import { Action, ActionType } from './actionTypes'

export interface Mentors {
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
  mentors: Mentors[]
  loading: boolean
  error: string | null
}

const initialState: State = {
  mentors: data,
  loading: false,
  error: null
}

const mentorsReducer = (state:State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.GET_MENTORS_PENDING:
    return {
      loading: true,
      mentors: [],
      error: null
    }

  case ActionType.GET_MENTORS_SUCCESS:
    return {
      loading: false,
      mentors: action.payload,
      error: null
    }

  case ActionType.GET_MENTORS_FAIL:
    return {
      loading: false,
      mentors: [],
      error: action.payload
    }

  default:
    return state
  }
}

export default mentorsReducer

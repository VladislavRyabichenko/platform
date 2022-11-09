import data from './data.json'

import { Action, ActionType } from './actionTypes'

export interface Statistic {
  overallReturn?:{
    value?: number
  }[]
  winningRate?:{
    value?: number
  }[]
  averageReturn?:{
    currency?: number,
    rate?: number
  }[]
}

interface State {
  statistic: Statistic
  loading: boolean
  error: string | null
}

const initialState : State = {
  statistic: data.statistic,
  loading: false,
  error: null
}

const statisticReducer = (state: State = initialState, action: Action):State => {
  switch (action.type) {
  case ActionType.GET_OVERALL_RETURN_PENDING:
    return {
      loading: true,
      statistic: {},
      error: null
    }

  case ActionType.GET_OVERALL_RETURN_SUCCESS:
    return {
      loading: false,
      statistic: action.payload,
      error: null
    }

  case ActionType.GET_OVERALL_RETURN_FAIL:
    return {
      loading: false,
      statistic: {},
      error: action.payload
    }

  default:
    return state
  }
}

export default statisticReducer

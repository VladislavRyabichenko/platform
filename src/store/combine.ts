import { combineReducers } from 'redux'
import statisticReducer from './statistics/reducers'
import leaderboardReducer from './leaderboard/reducers'
import expertTraderReducer from './expert-trader/reducers'
import mentorsReducer from './mentors/reducers'
import generalFunctionReducer from './general-function/reducers'

const reducers = combineReducers({
  statistics: statisticReducer,
  leaderboards: leaderboardReducer,
  expertTrader: expertTraderReducer,
  mentors: mentorsReducer,
  generalFunction: generalFunctionReducer
})

export default reducers

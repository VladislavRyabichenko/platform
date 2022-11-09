/* eslint-disable no-unused-vars */
import { Leaderboard } from './reducers'

export enum ActionType {
  GET_LEADERBOARD_PENDING = 'GET_LEADERBOARD_PENDING',
  GET_LEADERBOARD_SUCCESS = 'GET_LEADERBOARD_SUCCESS',
  GET_LEADERBOARD_FAIL = 'GET_LEADERBOARD_FAIL'
}

interface actionPending {
  type: ActionType.GET_LEADERBOARD_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_LEADERBOARD_SUCCESS;
  payload: Leaderboard[];
}

interface actionFail {
  type: ActionType.GET_LEADERBOARD_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;

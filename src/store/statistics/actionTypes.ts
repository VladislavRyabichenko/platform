/* eslint-disable no-unused-vars */
import { Statistic } from './reducers'

export enum ActionType {
  GET_OVERALL_RETURN_PENDING = 'GET_OVERALL_RETURN_PENDING',
  GET_OVERALL_RETURN_SUCCESS = 'GET_OVERALL_RETURN_SUCCESS',
  GET_OVERALL_RETURN_FAIL = 'GET_OVERALL_RETURN_FAIL'
}

interface actionPending {
  type: ActionType.GET_OVERALL_RETURN_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_OVERALL_RETURN_SUCCESS;
  payload: Statistic;
}

interface actionFail {
  type: ActionType.GET_OVERALL_RETURN_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;

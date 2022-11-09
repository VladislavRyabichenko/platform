/* eslint-disable no-unused-vars */
import { ExpertTrader } from './reducers'

export enum ActionType {
  GET_EXPERT_TRADER_PENDING = 'GET_EXPERT_TRADER_PENDING',
  GET_EXPERT_TRADER_SUCCESS = 'GET_EXPERT_TRADER_SUCCESS',
  GET_EXPERT_TRADER_FAIL = 'GET_EXPERT_TRADER_FAIL'
}

interface actionPending {
  type: ActionType.GET_EXPERT_TRADER_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_EXPERT_TRADER_SUCCESS;
  payload: ExpertTrader[];
}

interface actionFail {
  type: ActionType.GET_EXPERT_TRADER_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;

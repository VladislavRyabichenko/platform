/* eslint-disable no-unused-vars */
import { Mentors } from './reducers'

export enum ActionType {
  GET_MENTORS_PENDING = 'GET_MENTORS_PENDING',
  GET_MENTORS_SUCCESS = 'GET_MENTORS_SUCCESS',
  GET_MENTORS_FAIL = 'GET_MENTORS_FAIL'
}

interface actionPending {
  type: ActionType.GET_MENTORS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_MENTORS_SUCCESS;
  payload: Mentors[];
}

interface actionFail {
  type: ActionType.GET_MENTORS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;

/* eslint-disable no-unused-vars */
import { GeneralFunction } from './reducers'

export enum ActionType {
  HANDLE_OPEN_TRADER_MANUALLY = 'HANDLE_OPEN_TRADER_MANUALLY',
  HANDLE_OPEN_TRADER_THIRD_PARTY = 'HANDLE_OPEN_TRADER_THIRD_PARTY',
  SET_THEME = 'SET_THEME',
  SET_INSTRUMENT_TYPE = 'SET_INSTRUMENT_TYPE'
}

interface setTheme {
  type: ActionType.SET_THEME;
  payload: GeneralFunction;
}

interface HandleOpenTraderManually {
  type: ActionType.HANDLE_OPEN_TRADER_MANUALLY;
  payload: GeneralFunction
}

interface HandleOpenTraderThirdParty {
  type: ActionType.HANDLE_OPEN_TRADER_THIRD_PARTY;
  payload: GeneralFunction
}

interface setInstrumentType {
  type: ActionType.SET_INSTRUMENT_TYPE;
  payload: GeneralFunction
}

export type Action = setTheme | HandleOpenTraderManually | HandleOpenTraderThirdParty | setInstrumentType;

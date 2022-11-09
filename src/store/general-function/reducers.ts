import { Action, ActionType } from './actionTypes'

export interface GeneralFunction {
   theme: string,
   instrumentType: string
   modal: {
     addTrader: {
       manually: boolean
       thirdParty: boolean
     }
   }
}

interface State extends GeneralFunction {}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'dark'
}

const initialState : State = {
  theme: getInitialTheme(),
  instrumentType: 'option',
  modal: {
    addTrader: {
      manually: false,
      thirdParty: false
    }
  }
}

const generalFunctionReducer = (state: State = initialState, action: Action):State => {
  switch (action.type) {
  case ActionType.SET_THEME:
    return action.payload

  case ActionType.HANDLE_OPEN_TRADER_MANUALLY:
    return action.payload

  case ActionType.HANDLE_OPEN_TRADER_THIRD_PARTY:
    return action.payload

  case ActionType.SET_INSTRUMENT_TYPE:
    return action.payload

  default:
    return state
  }
}

export default generalFunctionReducer

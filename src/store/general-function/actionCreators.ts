import { Dispatch } from 'redux'

import { GeneralFunction } from './reducers'
import { Action, ActionType } from './actionTypes'

// Theme
export const rawSetTheme = (theme: string) => {
  const root = window.document.documentElement
  const isDark = theme === 'dark'

  root.classList.remove(isDark ? 'light' : 'dark')
  root.classList.add(theme)

  localStorage.setItem('color-theme', theme)
}

export const setTheme = (theme: string, state: GeneralFunction) => {
  rawSetTheme(theme)

  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_THEME,
      payload: {
        ...state,
        theme
      }
    })
  }
}

export const HandleOpenTraderManually = (value: boolean, state: GeneralFunction) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HANDLE_OPEN_TRADER_MANUALLY,
      payload: {
        ...state,
        modal: {
          addTrader: {
            ...state.modal.addTrader,
            manually: value
          }
        }
      }
    })
  }
}

export const HandleOpenTraderThirdParty = (value: boolean, state: GeneralFunction) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HANDLE_OPEN_TRADER_MANUALLY,
      payload: {
        ...state,
        modal: {
          addTrader: {
            ...state.modal.addTrader,
            thirdParty: value
          }
        }
      }
    })
  }
}

export const setInstrumentType = (value: string, state: GeneralFunction) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_INSTRUMENT_TYPE,
      payload: {
        ...state,
        instrumentType: value
      }
    })
  }
}

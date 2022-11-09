// We need this to use useSelector  (You can Export this as a react-hook to use separately)
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<any>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

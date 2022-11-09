import { useEffect, useRef } from 'react'

const useCloseClickOutside = (callback: () => void) => {
  const ref = useRef<any>()

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClick (event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClick)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return ref
}

export default useCloseClickOutside

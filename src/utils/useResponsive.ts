import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function useResponsive () {
  const [isClient, setIsClient] = useState(false)

  const xs2 = useMediaQuery({
    query: '(min-width: 475px)'
  })

  const xs = useMediaQuery({
    query: '(min-width: 576px)'
  })

  const sm = useMediaQuery({
    query: '(min-width: 640px)'
  })

  const md = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const tablet = useMediaQuery({
    query: '(min-width: 834px)'
  })

  const lg = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const xl = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  const desktop = useMediaQuery({
    query: '(min-width: 1440px)'
  })

  const xl2 = useMediaQuery({
    query: '(min-width: 1536px)'
  })

  const xl3 = useMediaQuery({
    query: '(min-width: 1760px)'
  })

  const xl4 = useMediaQuery({
    query: '(min-width: 1890px)'
  })

  const xl5 = useMediaQuery({
    query: '(min-width: 2048px)'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true)
  }, [])

  return {
    xs2: isClient ? xs2 : false,
    xs: isClient ? xs : false,
    sm: isClient ? sm : false,
    md: isClient ? md : false,
    tablet: isClient ? tablet : false,
    lg: isClient ? lg : false,
    xl: isClient ? xl : false,
    desktop: isClient ? desktop : false,
    xl2: isClient ? xl2 : false,
    xl3: isClient ? xl3 : false,
    xl4: isClient ? xl4 : false,
    xl5: isClient ? xl5 : false
  }
}

export default useResponsive

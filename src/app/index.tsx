import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'layout'
import { ExpertTrader, Home, Leaderboard, Mentors, SettingBillings, Supports, TraderCommunity, MyAccount } from 'pages'

import { rawSetTheme } from 'store/general-function/actionCreators'
import { useTypedSelector } from 'hooks/useTypeSelector'

function App () {
  const { theme } = useTypedSelector(state => state.generalFunction)

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Home/>}/>
            <Route path="/trader-community" element={<TraderCommunity/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}/>
            <Route path="/expert-traders" element={<ExpertTrader/>}/>
            <Route path="/mentors" element={<Mentors/>}/>
            <Route path="/settings" element={<SettingBillings/>}/>
            <Route path="/support" element={<Supports/>}/>
          </Route>

          <Route path="/user/zakan-zuk" element={<MyAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

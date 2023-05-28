import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, History } from '../pages'

import Default from '../layouts/Default'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default Router

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { History, Home } from '../pages'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default Router

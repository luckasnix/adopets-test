import React from 'react'
import SessionProvider from './contexts/providers/SessionProvider'
import Pets from './pages/Pets'

const App: React.FC = () => {
  return (
    <SessionProvider>
      <Pets/>
    </SessionProvider>
  )
}

export default App
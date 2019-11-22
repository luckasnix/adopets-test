import React from 'react'
import SessionProvider from './contexts/providers/SessionProvider'
import PetsPage from './pages/PetsPage'

const App: React.FC = () => {
  return (
    <SessionProvider>
      <PetsPage/>
    </SessionProvider>
  )
}

export default App
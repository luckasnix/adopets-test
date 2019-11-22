import React from 'react'
import SearchProvider from './contexts/providers/SearchProvider'
import PetsMain from './pages/PetsMain'

const App: React.FC = () => {
  return (
    <SearchProvider>
      <PetsMain/>
    </SearchProvider>
  )
}

export default App
import React from 'react'
import SearcProvider from './contexts/providers/SearcProvider'
import PetsMain from './pages/PetsMain'

const App: React.FC = () => {
  return (
    <SearcProvider>
      <PetsMain/>
    </SearcProvider>
  )
}

export default App
import './App.css'
import { Container } from '@mui/material'

// components
import Header from './components/Header'

function App() {
  return (
    <Container className='App' maxWidth='xl'>
      <Header id='main-header-component' />
    </Container>
  )
}

export default App

import { CardPage } from './scenes/CardPage'
import { SingleCardPage } from './scenes/SingleCardPage'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <CardPage/>} />
      <Route path="/card/:id" element={<SingleCardPage/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;

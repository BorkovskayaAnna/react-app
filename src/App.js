import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CardPage } from './scenes/CardPage'
import { SingleCardPage } from './scenes/SingleCardPage'
import { ErrorPage } from './scenes/ErrorPage'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <CardPage/>} />
      <Route exact path="/card/:id" element={ <SingleCardPage/> } />
      <Route path="/card" element={ <ErrorPage /> } status={404} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;

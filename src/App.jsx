import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import Pokemones from './pages/Pokemones';


const App = () => {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<Pokemon />}/>
      </Routes>
    </>

  )
}

export default App
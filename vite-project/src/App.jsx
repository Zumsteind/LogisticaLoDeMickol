import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/Navbar/NavBar';



function App() {
  const [count, setCount] = useState(0)

  return (
    

    <>


    <BrowserRouter>
    {/* <CarritoProvider> */}
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }  />
        <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/> */}
        <Route path='*' element={ <h2> Juanchi por ahora ChupameLaTripa</h2> }/>
      </Routes>
      {/* </CarritoProvider> */}
    </BrowserRouter>
  </>
     
  )
}

export default App

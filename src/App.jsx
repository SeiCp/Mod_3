import './styles/App.css';
import './styles/index.css';
import React, { useState } from 'react';
import Galeria from './components/Galeria.jsx';
import data from "./data/galeria.json"


function App() {
  
  const [galeria, setGaleria] = useState (data)
  const [valueSearch, setValueSearch] = useState ("");

  const handleChangeSearch = (ev) => {
    setValueSearch(ev.target.value);
  };

const filterFotos = galeria.filter(foto => foto.title.toLowerCase().includes())

  return (
    <>

    <h2>Galeria</h2>
    <input type="text" placeholder="buscar foto" id="search" value={valueSearch} onChange={handleChangeSearch} />
    
    <Galeria fotos={galeria}/> 
 
      
    </>
  )
}

export default App

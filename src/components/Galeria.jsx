function Galeria ({fotos}) {
  

    return (

     <ul>
      {fotos.map(foto =>  <li> 
        <h2>{foto.title}</h2> 
        <img src={foto.url} alt="Imagen"/>
        </li>)}
     </ul>  
  
    );
  }
  

  
  export default Galeria
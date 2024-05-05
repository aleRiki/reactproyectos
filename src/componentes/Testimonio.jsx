import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagenes-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)}
      alt='foto emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='Nombre-testimonio'><strong>{props.Nombre}</strong> en {props.Pais}</p>
        <p className='Cargo-testimonio'>{props.Cargo} en <strong>{props.Empresa}</strong> </p>
        <p className='Texto-testimonio'>"{props.Testimonio}"</p>

      </div>

    </div>
  );
}
export default Testimonio;
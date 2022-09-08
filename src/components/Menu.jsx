import { useState } from 'react'
import React from 'react'

const Menu = ({opcion, setOpcion}) => {
  
  const [ menu, setMenu] = useState(true);
  

  const handleMenu = () => { 
    setMenu(document.querySelector('#menu').classList.toggle('active'));
    document.body.classList.toggle('opacity')
  };

  const handleFondo = (e)=>{
    setOpcion(e.target.id);
  }; 

  return (
    <>
    <div onClick={handleMenu} className="bmenu">
      <span className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  }  name="l1"></span>
      <span className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  }  name="l2"></span>
      <span className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  }  name="l3"></span>
      <span className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  }  name="l4"></span>
    </div>
    
    <div className="cont-menu active" id="menu">
      <ul>
        <li id="cr" onClick={handleFondo}>Calculadora Roja</li>
        <li id="cas" onClick={handleFondo}>Calculadora Azul</li>
        <li id="cv" onClick={handleFondo}>Calculadora Verde</li>
        <li id="cm" onClick={handleFondo}>Calculadora Morada</li>
        <li id="cb" onClick={handleFondo}>Calculadora Blanca</li>
        <li id="cam" onClick={handleFondo}>Calculadora Amarilla</li>
      </ul>

    </div>
   </>
  
  )
}

export default Menu

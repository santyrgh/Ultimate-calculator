import { useState } from 'react';
import Menu from './components/Menu';
// import fr from './assets/img/fr.png';
import './App.css';

function App() {
  const [result, setResult] = useState("");  
  const [opcion, setOpcion] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("error")
    }
  }

  console.log(opcion);

  return (

  <div className='app'>

      {/* <body className='calculadora-logo-contenedor'>
        <img
          src={fr}
          className='calculadora-logo'
          alt='Logo de calculadora' />
      </body> */}

    
    <div className=
    {
      opcion == "cr" ? "container-rojo": 
      opcion == "cm" ? "container-morado" :
      opcion == "cam" ? "container-gold":
      opcion == "cb" ? "container-blanco":
     opcion == "cas" ? "container-azul":
        
      "container"}
    >
     <Menu
      opcion={opcion}
      setOpcion={setOpcion}
     />
     <br/>
      <form action="">
        <input className=
        {
          opcion == "cr" ? "rojo2": 
          opcion == "cm" ? "color-morado2" :
          opcion == "cam" ? "color-gold2":
          opcion == "cb" ? "color-blanco2":
          opcion == "cas" ? "color-azul2":
           
          "pantalla"}
        
        type="text" value={result}/>        
      </form>

          

      <div className="keypad">
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"}
                   onClick={clear} id="clear">CLEAR</button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"}
                   onClick={backspace} id="backspace">C
     
        </button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"}
                   name="/" onClick={handleClick}>&divide;</button>
     
        <button  className=  
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"}
                   name="7" onClick={handleClick}>7</button>
        <button  className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }
                 name="8" onClick={handleClick}>8</button>
        <button  className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }
                  name="9" onClick={handleClick}>9</button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  } name="*" onClick={handleClick}>&times;</button>
        <button className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }
                 name="4" onClick={handleClick}>4</button>
        <button  className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                } name="5" onClick={handleClick}>5</button>
        <button  className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                } name="6" onClick={handleClick}>6</button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  } name="-" onClick={handleClick}>&ndash;</button>
        <button 
        className= 
        {
          opcion == "cr" ? "color-rojo1": 
          opcion == "cm" ? "color-morado1":
          opcion == "cam" ? "color-gold1":
          opcion == "cb" ? "color-blanco1":
          opcion == "cas" ? "color-azul1":
          "button"
        } name="1" onClick={handleClick}>1</button>
        <button className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }name="2" onClick={handleClick}>2</button>
        <button className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "hbutton"
                }name="3" onClick={handleClick}>3</button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  } name="+" onClick={handleClick}>+</button>
        <button className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }name="0" onClick={handleClick}>0</button>
        <button className= 
                {
                  opcion == "cr" ? "color-rojo1": 
                  opcion == "cm" ? "color-morado1":
                  opcion == "cam" ? "color-gold1":
                  opcion == "cb" ? "color-blanco1":
                  opcion == "cas" ? "color-azul1":
                  "button"
                }name="." onClick={handleClick}>.</button>
        <button className=  
                {
                  opcion == "cr" ? "color-rojo": 
                  opcion == "cm" ? "color-morado" :
                  opcion == "cam" ? "color-gold":
                  opcion == "cb" ? "color-blanco":
                  opcion == "cas" ? "color-azul":
                  "highlight"  } onClick={calculate} id="result">=</button>
      </div>

    </div>
    
  </div>
  );
}

export default App;

import React,{useState} from 'react';
import Escena from './components/./escena/Escena'
import "./App.css";

function App() {

  const [frases,setFrases] = useState([
   { name:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial" },
   { name:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." },
   { name:"L'heroi va decidir travessar la porta que el portava a casa" },
   { name:"Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..." },



  ]);
  return (
    <div className = "app">
      {frases.map(frase =>(
        <Escena name={frase.name}/>
      ))}
      
    </div>
  );
}
export default App;



/*function App() {
  return (
    <div>
      
      <Escena/>
      
    </div>
  );
}*/

/*function App() {
  return (
    <div className = "app">
      <Escena name="El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"/>
      <Escena name="Sentia curiositat per l'interior de la nau i es va posar  a inspeccionar-la. Va arribar a una sala amb dues portes."/>
      <Escena name="L'heroi va decidir travessar la porta que el portava a casa"/>
      <Escena name="Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."/>
      
    </div>
  );
}*/



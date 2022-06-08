import React from 'react';


function Escena (props) {
    return(
        
        <div className ="escena">
             <h3> {props.name}</h3>
        
        
             
        </div>
       
    );
}
export default Escena;


/*function Escena ({name}) {
    return(
        
        <div className ="escena">
             <h3> {name}</h3>
        
        
             
        </div>
       
    );
}*/


/*const Escena =()=> {
    return(
        <Fragment>
        <div className ="frase1">
             <h3> "El nostre heroi estava surant per l'espai 
                  sideral quan a la llunyania va albirar una nau espacial"</h3>
        </div>
        <div className ="frase2">
             <h3> "Sentia curiositat per l'interior de la nau i es va posar 
                    a inspeccionar-la. Va arribar a una sala amb dues portes."</h3>
        </div>
         <div className ="frase3">
             <h3> "L'heroi va decidir travessar la porta que el portava a casa"</h3>
        </div>
        <div className ="frase4">
             <h3> "Mentrestant, altres herois no van tenir tanta sort en la 
                  seva elecció ..."</h3>
        </div>
        </Fragment>
    );
}*/





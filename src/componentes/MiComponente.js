import react, {Component} from "react";

class MiComponente extends Component{

render(){
let receta = {
nombre: 'pizza',
ingredientes:['tomate','queso','blabla','123'],
Calorias: 400
};
    return(
        //React fragment permite poner varias etiquetas o se puede usar div
        // <react.Fragment>
        <div className="micomponente">
        <h1>Mi Componente</h1>
        <hr/>
        <h2>react fragment</h2>
        
        <div className="receta">
        <h3>{'Receta: ' + receta.nombre}</h3>
        <h4>{'Calorias: ' + receta.Calorias}</h4>
      
    {
        receta.ingredientes.map((ingrediente,i) => {
            return(
                <li key={i}>{ingrediente}</li>
            );
        })
    }

        </div>
        </div>
       // </react.Fragment>
        
    )
}

}

export default MiComponente;
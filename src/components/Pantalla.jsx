import React from 'react'

const Pantalla = ({operation,operationAux}) => {
    return (
        <div className="conteiner-pantalla">
            <p className="operation">{operationAux}</p>
            <input className="pantalla" type="text" value={operation} />
        </div>
    )
}

export default Pantalla
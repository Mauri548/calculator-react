import React from 'react'

const Button = ({tecla, type, add, addOperation, Delete, calculate}) => {
    
    const click = () => {
        switch (type) {
            case 'delete':
                Delete()
                break;

            case 'number':
                add(tecla)
                break;

            case 'operacion':
                addOperation(tecla)
                break;
            
            case 'igual':
                calculate()
                break

            default:
                break;
        }
    }

    return (
        <td style={{padding: '0px', width: '25%'}}>
            <div onClick={click} className="button-calculator">
                <p>{tecla}</p>  
            </div>
        </td>
    )
}

export default Button
import React, { useState } from 'react'
import Pantalla from './Pantalla'
import Teclados from './Teclados'


const Calculator = () => {

    const [operation,setOperation] = useState('')
    const [operation_aux,setOperationAux] = useState('')
    const [parentesis,setParentesis] = useState(0)

    const Add = (valor) => {
        setOperation(operation + valor)

        if (parentesis > 0) {
            setOperation(operation.substring(0, operation.length - parentesis) + valor +
            operation.substring(operation.length - parentesis,operation.length))
        } else {
            setOperation(operation + valor)
        }
    }

    const AddOperation = (valor) => {
        // setOperation(operation + ' ' + valor + ' ')
        if (valor === '(') {
            if (parentesis > 0) {
                setOperation(operation.substring(0, operation.length - parentesis) + ' ' + valor + ')' +
                operation.substring(operation.length - parentesis,operation.length))
            } else {
                setOperation(operation + ' ' + valor + ')')
            }
            setParentesis(parentesis + 1)
        } else if (valor === ')') {
            setParentesis(parentesis - 1)
        } else {
            if (parentesis > 0) {
                setOperation(operation.substring(0, operation.length - parentesis ) + ' ' + valor + ' ' +
                operation.substring(operation.length - parentesis,operation.length))
            } else {
                setOperation(operation + ' ' + valor + ' ')
            }
        }

    }

    const Delete = () => {
        operation[operation.length-1] === ' ' ? setOperation(operation.substring(0,operation.length - 3))
        : setOperation(operation.substring(0,operation.length - 1))  
    }


    // Calculo
    const Calculate = () => {
        let calculo = 0
        let arreglo = operation.split(' ')
        const regex = /^[0-9].*$/
        let onlySuma = false

        // Pasamos los numeros a string
        for (let i = 0; i < arreglo.length; i++) {
            if (regex.test(arreglo[i])) {
                arreglo[i] = parseFloat(arreglo[i])
            }
        }



        // Calculara mientras exista division y multiplicación
        while (!onlySuma) {
            let resultAux
            let multordiv = false
            let i = 99999
            let aux = []
            arreglo.forEach((element, index) => {
                if (!multordiv) {
                    if (isNaN(arreglo[index+1])) {

                        if (arreglo[index+1] === '×' || arreglo[index+1] === '÷') {
                            arreglo[index+1] === '×' ? resultAux = element * arreglo[index+2]
                            : resultAux = element / arreglo[index+2] 
                            aux.push(resultAux)
                            i = index+1
                            multordiv = true
                        } else {
                            aux.push(element)
                        }
                    } else {
                        aux.push(element)
                    }
                } else {
                    console.log('i: ' + i + ' index: ' + index)
                    if ((index !== i) && (index !== i+1)) {
                        aux.push(element)
                    }
                }
            })
            arreglo = aux

            if ( (arreglo.find(element => element === '÷') === undefined) && (arreglo.find(element => element === '×') === undefined)) {
                onlySuma = true
            }
        }

        arreglo.forEach((element, index) => {
            if (index === 0) {
                calculo = element
            } else {
                if (isNaN(element)) {
                    if (isNaN(element)) {
                        element === '+' ? calculo = calculo + arreglo[index+1] : calculo = calculo - arreglo[index+1]
                    }
                }
            }
        })
        calculo = calculo.toString()
        setOperationAux(operation + ' = ' + calculo)
        setOperation(calculo)
    }

    return (
        <div className="conteiner">
            <div className="conteiner-switch">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <Pantalla operation={operation} operationAux ={operation_aux} />
            <Teclados add={Add} Delete={Delete} addOperation={AddOperation} calculate={Calculate} />
        </div>
    )
}

export default Calculator
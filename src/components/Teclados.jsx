import React from 'react'
import Button from './Button'

const Teclados = ({add, Delete, addOperation, calculate}) => {
    return (
        <table className="teclados">
            <tbody>
                <tr>       
                    <Button tecla={'('} type={'operacion'} addOperation={addOperation} />
                    <Button tecla={')'} type={'operacion'} addOperation={addOperation} />
                    <Button tecla={'%'} type={'operacion'} addOperation={addOperation} />
                    <Button tecla={'AC'} type={'delete'} Delete={Delete} />
                </tr>
                <tr>
                    <Button tecla={'7'} type={'number'} add={add} />
                    <Button tecla={'8'} type={'number'} add={add} />
                    <Button tecla={'9'} type={'number'} add={add} />
                    <Button tecla={'÷'} type={'operacion'} addOperation={addOperation} />
                </tr>
                <tr>
                    <Button tecla={'4'} type={'number'} add={add} />
                    <Button tecla={'5'} type={'number'} add={add} />
                    <Button tecla={'6'} type={'number'} add={add} />
                    <Button tecla={'×'} type={'operacion'} addOperation={addOperation} />
                </tr>
                <tr>
                    <Button tecla={'1'} type={'number'} add={add} />
                    <Button tecla={'2'} type={'number'} add={add} />
                    <Button tecla={'3'} type={'number'} add={add} />
                    <Button tecla={'-'} type={'operacion'} addOperation={addOperation} />
                </tr>
                <tr>
                    <Button tecla={'0'} type={'number'} add={add} />
                    <Button tecla={'.'} type={'number'} add={add} />
                    <Button tecla={'='} type={'igual'} calculate={calculate} />
                    <Button tecla={'+'} type={'operacion'} addOperation={addOperation} />
                </tr>
            </tbody>
        </table>
    )
}

export default Teclados
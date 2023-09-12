import React from "react";
import s from './Counter.module.css'


type PropsCounterType = {
    counter: number | string
    color: string
    firstMessage: string
    warningMessage: string

}



export const Counter: React.FC<PropsCounterType> = (props) => {

    const styleCounter = `
    ${props.color === 'black' ? s.active : s.limit}
    `

    const styleMessage = `
    ${props.counter === props.firstMessage ? s.active : s.limit}
    ${props.counter === props.warningMessage ? s.limit : s.active}
    `
    const styleResult = typeof props.counter === 'number' ? styleCounter : styleMessage


    return (

        <div className={s.counter}>
            <div className={styleResult}>{props.counter}</div>
        </div>
    )
}



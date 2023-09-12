import React from "react";
import s from './Button.module.css'

type PropsButtonType = {
    name: string
    callBack: () => void
    color: string
}

export const Button: React.FC<PropsButtonType> = (props) => {

    const onClickHandler = () => {
        props.callBack()
    }
    const buttonClassName = props.color === 'aquamarine' ? `${s.button} ${s.active}` : `${s.button} ${s.disable}`
    return (
        
            <button className={buttonClassName} onClick={onClickHandler}>{props.name}</button>
        


    )
}
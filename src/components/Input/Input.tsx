import { ChangeEvent } from 'react'
import s from './input.module.css'

type PropsInputType = {
    name: string
    callBack: (value: number) => void
    color: string
    value: number
}




export const Input: React.FC<PropsInputType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(Number(e.currentTarget.value))
    }

    const inputClassName = props.color === 'red' ? `${s.input} ${s.warning}` : s.input

    return (
        <div>
            <span className={s.textValue}>{`${props.name} :`}</span>
            <span className={s.inputContainer}>
                <input value={props.value} className={inputClassName} type={"number"} onChange={onChangeHandler} />
            </span>
        </div>

    )
}




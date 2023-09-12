import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import s from './MainCounterCustomizer.module.css'


type PropsMainCounterCustomizerType = {
    counter: number
    startValue: number
    maxValue: number
    message: string
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    settingMinimumValue: () => void
}




export const MainCounterCustomizer: React.FC<PropsMainCounterCustomizerType> = (props) => {

    const inputMaxValueColor = props.maxValue != 0 && props.startValue === props.maxValue || props.maxValue < 0 || props.maxValue < props.startValue ? 'red' : 'black'
    const inputMinValueColor = props.startValue != 0 && props.startValue === props.maxValue || props.startValue < 0 || props.startValue > props.maxValue ? 'red' : 'black'
    const buttonSetColor = !props.message || props.startValue < 0 || props.startValue >= props.maxValue ? 'grey' : 'aquamarine'
    // const buttonColor = props.counter === props.startValue ? 'grey' : 'aquamarine'

    return (
        <div className={s.inputArea}>
            <div className={s.inputBox}>
                <div className={s.input}>
                    <Input value = {props.maxValue} name={'max value'} callBack={props.changeMaxValue} color={inputMaxValueColor} />
                </div>
                <div className={s.input}>
                    <Input value = {props.startValue} name={'min value'} callBack={props.changeStartValue} color={inputMinValueColor} />
                </div>
            </div>
            <div className={s.buttonArea}>
                <Button name={'SET'} callBack={props.settingMinimumValue} color={buttonSetColor} />
            </div>
        </div>
    )
}











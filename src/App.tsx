import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNumberCounter } from './components/MainNumberCounter/MainNumberCounter';
import { MainCounterCustomizer } from './components/MainCounterCustomizer/MainCounterCustomizer';
import { useDispatch } from 'react-redux';
import { AppRootState } from './store/store';
import { useSelector } from 'react-redux';
import { changeMaxValueAC, changeStartValueAC, getFirstMessageAC, getSettingAC, getWarningMessageAC, increaseCounterAC, resetCounterAC, setCounterZeroAC, setEmptyMessageAC } from './store/counterReduser';




function App() {

const dispatch = useDispatch()
const counter = useSelector<AppRootState, number>(state => state.stateCounter.counter)
const maxValue = useSelector<AppRootState, number>(state => state.stateCounter.maxValue)
const startValue = useSelector<AppRootState, number>(state => state.stateCounter.startValue)
const message = useSelector<AppRootState, string>(state => state.stateCounter.message)
const setting = useSelector<AppRootState, boolean>(state => state.stateCounter.setting)
const firstMessage = useSelector<AppRootState, string>(state => state.stateCounter.firstMessage)
const warningMessage = useSelector<AppRootState, string>(state => state.stateCounter.warningMessage)
  

  // +counter
  const increaseCounter = () => {
    if (counter < maxValue) {
      dispatch(increaseCounterAC());
    }
  }

 
  // show settings
  const getSetting = () => {
    dispatch(getSettingAC());
  }

// counter reset
  const resetCounter = () => {
    dispatch(resetCounterAC())
  }

  // write in state max value 
  const changeMaxValue = (value: number) => {

    dispatch(changeMaxValueAC(value));
    value > startValue && value >= 0 ? dispatch(getFirstMessageAC()) : dispatch(getWarningMessageAC())
    dispatch(setCounterZeroAC())
  }


  // write in state start value 
  const changeStartValue = (value: number) => {
    dispatch(changeStartValueAC(value));
    value < maxValue && value >= 0 ? dispatch(getFirstMessageAC()) : dispatch(getWarningMessageAC())
    dispatch(setCounterZeroAC())

  }


  // setting the minimum value
  const settingMinimumValue = () => {

    if (startValue < maxValue && startValue >= 0 && maxValue > 0) {
      dispatch(setEmptyMessageAC())
      dispatch(resetCounterAC ()) //set start value
      getSetting()
    } else {
      dispatch(getWarningMessageAC()) 
    }

  }


  return (
    <div>
      {
        !setting ?
          <MainNumberCounter
            message={message}
            counter={counter}
            startValue={startValue}
            maxValue={maxValue}
            increaseCounter={increaseCounter}
            resetCounter={resetCounter}
            getSetting={getSetting}
            firstMessage = {firstMessage}
            warningMessage = {warningMessage}
          />
          :
          <MainCounterCustomizer
            counter={counter}
            startValue={startValue}
            maxValue={maxValue}
            changeStartValue={changeStartValue}
            changeMaxValue={changeMaxValue}
            settingMinimumValue={settingMinimumValue}
            message={message}
          />
      }

    </div>
  );
}

export default App;

//_________________________________________________________________________________________________

// setMaxValue((val: number) => {
//   localStorage.setItem('maxValue', JSON.stringify(val))
//   return val


//ВЫПИЛИЛ НА ВРЕМЯ LOCAL STORAGE ДЛЯ РАБОТЫ С REDUX
// //writing values in localStorage
// useEffect(() => {
//   localStorage.setItem('counter', JSON.stringify(counter))
//   localStorage.setItem('startValue', JSON.stringify(startValue))
//   localStorage.setItem('maxValue', JSON.stringify(maxValue))

// }, [counter, startValue, maxValue])


//   //get from localStorage and write to state
//   useEffect(() => {

//     let counterAsString = localStorage.getItem('counter')
//     let startValueAsString = localStorage.getItem('startValue')
//     let maxValueAsString = localStorage.getItem('maxValue')

//     if (counterAsString) {
//       let newCounter = JSON.parse(counterAsString)
//       setCounter(newCounter)
//     }

//     if (startValueAsString) {
//       let newStartValue = JSON.parse(startValueAsString)
//       setStartValue(newStartValue)
//     }

//     if (maxValueAsString) {
//       let newMaxValue = JSON.parse(maxValueAsString)
//       setMaxValue(newMaxValue)
//     }

//   }, [])

//_________________App no REDUX____________________________________________________


// export const firstMessage = "Enter values and press 'set'"
// export const warningMessage = 'Incorrect value!'

// function App() {

//   let [counter, setCounter] = useState<number>(0)
//   let [maxValue, setMaxValue] = useState<number>(0)
//   let [startValue, setStartValue] = useState<number>(0)
//   let [message, setMessage] = useState<string>('')
//   let [setting, setSetting] = useState<boolean>(false)



//   // +counter
//   const increaseCounter = () => {
//     if (counter < maxValue) {
//       setCounter(counter + 1);
//     }
//   }

 
//   // show settings
//   const getSetting = () => {
//     setSetting(!setting);
//   }

// // counter reset
//   const resetCounter = () => {
//     setCounter(startValue)
//   }

//   // write in state max value 
//   const changeMaxValue = (value: number) => {

//     setMaxValue(value);
//     value > startValue && value >= 0 ? setMessage(firstMessage) : setMessage(warningMessage)
//     setCounter(0)
//   }


//   // write in state start value 
//   const changeStartValue = (value: number) => {
//     setStartValue(value);
//     value < maxValue && value >= 0 ? setMessage(firstMessage) : setMessage(warningMessage)
//     setCounter(0)

//   }


//   // setting the minimum value
//   const settingMinimumValue = () => {

//     if (startValue < maxValue && startValue >= 0 && maxValue > 0) {
//       setMessage('')
//       setCounter(startValue)
//       getSetting()
//     } else {
//       setMessage('Incorrect value!')
//     }

//   }


//   return (
//     <div>
//       {
//         !setting ?
//           <MainNumberCounter
//             message={message}
//             counter={counter}
//             startValue={startValue}
//             maxValue={maxValue}
//             increaseCounter={increaseCounter}
//             resetCounter={resetCounter}
//             getSetting={getSetting}
//           />
//           :
//           <MainCounterCustomizer
//             counter={counter}
//             startValue={startValue}
//             maxValue={maxValue}
//             changeStartValue={changeStartValue}
//             changeMaxValue={changeMaxValue}
//             settingMinimumValue={settingMinimumValue}
//             message={message}
//           />
//       }

//     </div>
//   );
// }

// export default App;
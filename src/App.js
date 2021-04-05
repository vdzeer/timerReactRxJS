import { useState, useEffect } from 'react'
import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import Btns from './Components/Btns'
import Timer from './Components/Timer'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let unsubscribe = new Subject()

    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (timerOn) {
          setTime((prevTime) => prevTime + 1000)
        }
      })
    return () => {
      unsubscribe.next()
      unsubscribe.complete()
    }
  }, [timerOn])

  return (
    <div className='App'>
      <Timer time={time} />
      <Btns
        time={time}
        setTime={setTime}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
      />
    </div>
  )
}

export default App

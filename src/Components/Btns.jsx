import WaitBtn from './WaitBtn'

function Btns({ time, setTime, timerOn, setTimerOn }) {
  return (
    <div className='btns'>
      {!timerOn && time === 0 && (
        <button onClick={() => setTimerOn(true)}>Start</button>
      )}
      {!timerOn && time > 0 && (
        <button onClick={() => setTimerOn(true)}>Continue</button>
      )}
      {timerOn && (
        <button
          onClick={() => {
            setTimerOn(false)
            setTime(0)
          }}
        >
          Stop
        </button>
      )}
      {timerOn && time !== 0 && <WaitBtn setTimerOn={setTimerOn} />}
      {timerOn && time > 0 && <button onClick={() => setTime(0)}>Reset</button>}
    </div>
  )
}

export default Btns

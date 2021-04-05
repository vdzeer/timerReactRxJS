function Timer({ time }) {
  return (
    <div className='stopwatch'>
      <span className='num'>
        {('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
      </span>
      <span className='num'>
        {('0' + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}
      </span>
      <span className='num'>
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  )
}

export default Timer

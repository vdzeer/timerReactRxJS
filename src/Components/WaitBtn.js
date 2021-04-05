import { useEffect, useRef } from 'react'
import { fromEvent } from 'rxjs'
import { buffer, debounceTime, map, filter } from 'rxjs/operators'

function WaitBtn({ setTimerOn }) {
  const waitBtn = useRef(null)

  useEffect(() => {
    const mouse$ = fromEvent(waitBtn.current, 'click')
    const buff$ = mouse$.pipe(debounceTime(299))

    mouse$
      .pipe(
        buffer(buff$),
        map((list) => list.length),
        filter((x) => x === 2)
      )
      .subscribe(() => {
        setTimerOn(false)
      })
  }, [])

  return <button ref={waitBtn}>Wait</button>
}

export default WaitBtn

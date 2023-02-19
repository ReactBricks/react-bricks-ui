import { MouseEventHandler, RefObject, useEffect } from 'react'

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: MouseEventHandler<HTMLElement>
) => {
  useEffect(() => {
    const listener = (event: any) => {
      console.log('handler')
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside

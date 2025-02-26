import React, { useEffect } from 'react'

export const useIntersectionObserver = <T>(
    ref: React.RefObject<T>,
    callback: (entries: IntersectionObserverEntry[]) => void,
    option: IntersectionObserverInit = { rootMargin: '0px 0px -100px 0px' }
) => {
    const [observer, setObserver] = React.useState<IntersectionObserver | null>(
        null
    )

    useEffect(() => {
        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [observer])

    React.useLayoutEffect(() => {
        if (ref.current && !!window.IntersectionObserver) {
            const intObserver = new IntersectionObserver(callback, option)
            intObserver.observe(ref.current)
            setObserver(intObserver)
        }
    }, [])
}

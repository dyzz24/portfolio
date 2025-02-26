import React, { useEffect } from 'react'

export const useUnobserve = (
    refCollection: React.RefObject<HTMLDivElement>[],
    observer: IntersectionObserver | null
) => {
    useEffect(() => {
        return () => {
            if (refCollection.length && observer) {
                refCollection.forEach((parentElement) => {
                    if (parentElement.current) {
                        observer?.unobserve(parentElement.current)
                    }
                })
            }
        }
    }, [])
}

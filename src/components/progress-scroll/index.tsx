import styles from './style.module.scss'
import React from 'react'

import debounce from 'lodash.debounce'

export const ProgressScroll = () => {
    const [percent, setPercent] = React.useState(0)

    const progressHandler = () => {
        const calculated =
            (window.scrollY * 100) /
            (document.documentElement.scrollHeight - window.innerHeight)
        setPercent(Math.round(calculated))
    }

    const debouncedProgressHandler = debounce(progressHandler, 20)

    React.useEffect(() => {
        window.addEventListener('scroll', debouncedProgressHandler)
        return () =>
            window.removeEventListener('scroll', debouncedProgressHandler)
    }, [])

    return (
        <div
            className={styles.progress_scroll}
            style={{ width: percent + '%' }}
        />
    )
}

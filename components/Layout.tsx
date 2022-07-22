import React, { FC, ReactNode } from 'react'
import styles from '../styles/Layout.module.css'

type childrenProps = {
    children: ReactNode
}

const layout: FC<childrenProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default layout
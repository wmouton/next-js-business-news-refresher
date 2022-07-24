import React, { FC, ReactNode } from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import About from '../pages/about'

type childrenProps = {
    children: ReactNode
}

const layout: FC<childrenProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout
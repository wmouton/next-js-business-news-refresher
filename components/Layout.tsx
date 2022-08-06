import React, { ReactNode } from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import { NextPage } from 'next'

type childrenProps = {
    children: ReactNode
}

const layout: NextPage<childrenProps> = ({ children }) => {
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
import React from 'react'
import Meta from './mata'
import Header from './header'

const user = '승재'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children } : Props) => {
    return (
        <>
        <Meta/>
        <main>
            <Header user = {{name : "이승재", like : ["민초파", "모닝똥", "딱복파"]}}/>
            {children}
        </main>
        </>
    )
}

export default Layout
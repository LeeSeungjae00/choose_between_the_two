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
            <Header user = {{name : "이승재", like : ["민초파", "모닝", "딱복파"]}}/>
            {/* TODO: 유저 정보 로그인해서 정보를 가져온 후 전달 하는 방식으로 변경 */}
            {children}
        </main>
        </>
    )
}

export default Layout
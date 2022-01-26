import React ,{ ReactNode, FunctionComponent } from 'react'
import styles from '../styles/header.module.css'
import { User } from '../types/user'

type Props = {
    user : User
}

const Header: FunctionComponent<Props> = ({user} : Props) => {
  return (
    <div className = {styles.header}>
        <div className = {styles.headerContent}>
            <h1 className = {styles.title}>양자 택일</h1>
            {/* TODO: 각 항목들의 아이콘 만들어서 유저 프사 옆에 칭호처럼 달기 */}
            <h3>안녕하세요! {user.like.join(' ,')}인 {user.name}님</h3>
        </div>
    </div>
  )
}

export default Header

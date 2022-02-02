
import Link from 'next/link'
import styles from '../styles/mainMenu.module.css'

export default function MainMenu() {
    return (
        <div className = {styles.mainMenu}>
            <Link href = "/mint"><div className = {styles.menuContainer}>민초파 vs 반민초파</div></Link>
            <Link href = "/morning"><div className = {styles.menuContainer}>오전 vs 오후</div></Link>
            <Link href = "/tangsu"><div className = {styles.menuContainer}>찍먹 vs 부먹</div></Link>
            <Link href = "/peach"><div className = {styles.menuContainer}>딱복 vs 물복</div></Link>
        </div>
    )
}


import Link from 'next/link'

export default function MainMenu() {
    return (
        <div>
            <Link href = "/mint"><a>민초파 vs 반민초파</a></Link>
            <Link href = "/morning"><a>오전 vs 오후</a></Link>
            <Link href = "/tangsu"><a>찍먹 vs 부먹</a></Link>
            <Link href = "/peach"><a>딱복 vs 물복</a></Link>
        </div>
    )
}

import Head from 'next/head'
import { BASIC_DESC, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
    return (
        <Head>
            {/* TODO: 각 운영체제에 따른 파비콘 수정하기 */}
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content={BASIC_DESC}
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
    )
}

export default Meta

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import MainMenu from '../components/mainMenu'

const Home: NextPage = () => {
  return (
    <Layout>
      <MainMenu></MainMenu>
    </Layout>
  )
}

export default Home

import Head from 'next/head'
import { Button } from '@project/shared'

export default function Home() {
  return (
    <div>
      <Head>
        <title>lerna | monorepo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button />
    </div>
  )
}
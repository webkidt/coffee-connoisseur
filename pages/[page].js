import { useRouter } from 'next/router'
import Head from 'next/head'

const DynamicRoute = () => {
  const router = useRouter()
  const title = `${router.query.page} page`

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>Page {router.query.page}</div>
    </div>
  )
}

export default DynamicRoute

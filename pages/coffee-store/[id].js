import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps(staticProps) {
  const params = staticProps.params
  console.log('params', params)
  return {
    props: {
      coffeeStores: coffeeStoresData.find(
        coffeeStore => coffeeStore.id.toString() === params.id
      ),
    },
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: true,
  }
}

const CoffeeStore = props => {
  const router = useRouter()
  console.log('router: ', router)

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const { address, name, neighbourhood } = props.coffeeStores

  console.log('props', props)
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back to Home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  )
}

export default CoffeeStore

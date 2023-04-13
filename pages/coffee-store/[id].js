import { useRouter } from 'next/router'
import Link from 'next/link'

import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps(staticProps) {
  const params = staticProps.params
  console.log('params', params)
  return {
    props: {
      coffeeStores: coffeeStoresData.find(coffeeStore => coffeeStore.id.toString() === params.id),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: false,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter()
  console.log('router: ', router)
  console.log('props', props)
  return (
    <div>
      Coffee Store Page: {router.query.id}
      <br />
      <Link href="/">Back to Home</Link>
      <p>{props.coffeeStores.address}</p>
      <p>{props.coffeeStores.name}</p>
    </div>
  )
}

export default CoffeeStore

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from '../../styles/coffee-store.module.css'

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
  const paths = coffeeStoresData.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
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

  const { address, name, neighbourhood, imgUrl } = props.coffeeStores
  console.log('props', props)

  const handleUpvoteButton = () => {
    console.log('handle up vote')
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to Home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={classNames('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width="24"
              height="24"
              alt="places icon"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width="24"
              height="24"
              alt="near me icon"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" alt="star icon" />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore

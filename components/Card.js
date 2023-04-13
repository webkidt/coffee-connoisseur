import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './Card.module.css'

const Card = props => {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={classNames('glass', styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            width={260}
            height={160}
            alt="card image"
          />
        </div>
      </div>
    </Link>
  )
}

export default Card

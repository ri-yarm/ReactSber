import styles from './FilterButton.module.css'
import { memo } from 'react'

type Props = {
  children: React.ReactNode
  onClick: () => void
  color?: 'primary' | 'danger'
}

export const FilterButton = memo(
  ({ children, onClick, color = 'primary' }: Props) => {
    const className = `${styles.button} ${styles[color]}`

    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    )
  }
)

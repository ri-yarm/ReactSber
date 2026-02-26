import type { Task } from 'entities/task'
import styles from './TaskCard.module.css'

type Props = {
  task: Task
  action: (id: Task['id']) => void
}

export const TaskCard = ({ task, action }: Props) => {
  const className = task.completed ? styles.card__completed : styles.card

  return (
    <div className={className}>
      <h6>{task.title}</h6>
      <span>{task.completed ? 'Выполнено' : 'Не выполнено'}</span>
      <button onClick={() => action(task.id)}>Удалить</button>
    </div>
  )
}

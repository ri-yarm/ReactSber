import { type Task, TaskCard } from 'entities/task'
import styles from './TaskList.module.css'
import { FilterButton } from 'shared/ui'
import type { Filter } from 'features/taskList/model/types.ts'

type Props = {
  tasks: Task[]
  action: (id: Task['id']) => void
  setFilter: (f: Filter) => void
}

export const TaskList = ({ tasks, action, setFilter }: Props) => {
  const setFilterAll = () => setFilter('all')
  const setFilterCompleted = () => setFilter('completed')
  const setFilterIncomplete = () => setFilter('incomplete')

  return (
    <div>
      <FilterButton onClick={setFilterAll}>ВСЕ</FilterButton>
      <FilterButton onClick={setFilterCompleted}>Выполненые</FilterButton>
      <FilterButton onClick={setFilterIncomplete}>В работе</FilterButton>

      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} action={action} />
        ))}
      </div>
    </div>
  )
}

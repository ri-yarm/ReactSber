import { type Task, TaskCard } from 'entities/task'
import styles from './TaskList.module.css'
import { FilterButton } from 'shared/ui'
import type { Filter } from 'features/taskList/model/types.ts'
import { memo, useCallback } from 'react'

type Props = {
  tasks: Task[]
  action: (id: Task['id']) => void
  setFilter: (f: Filter) => void
}

export const TaskList = memo(({ tasks, action, setFilter }: Props) => {
  const setFilterAll = useCallback(() => setFilter('all'), [setFilter])
  const setFilterCompleted = useCallback(
    () => setFilter('completed'),
    [setFilter]
  )
  const setFilterIncomplete = useCallback(
    () => setFilter('incomplete'),
    [setFilter]
  )

  return (
    <div>
      <FilterButton onClick={setFilterAll}>ВСЕ</FilterButton>
      <FilterButton onClick={setFilterCompleted}>Выполненные</FilterButton>
      <FilterButton onClick={setFilterIncomplete}>В работе</FilterButton>

      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} action={action} />
        ))}
      </div>
    </div>
  )
})

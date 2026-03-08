import { useCallback, useMemo, useState } from 'react'
import type { Task } from 'entities/task/model/types.ts'
import type { Filter, useTaskI } from 'features/taskList/model/types.ts'

const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: true },
  { id: '3', title: 'Task 3', completed: false },
  { id: '4', title: 'Task 3', completed: false },
  { id: '5', title: 'Task 3', completed: false },
]

export function useTasks(): useTaskI {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filter, setFilter] = useState<Filter>('all')

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'incomplete') return !task.completed
        return true // все
      }),
    [tasks, filter]
  )

  return {
    tasks: filteredTasks,
    removeTask,
    filter,
    setFilter,
  }
}

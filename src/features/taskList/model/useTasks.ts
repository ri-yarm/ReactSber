import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Task } from 'entities/task/model/types.ts'
import type { Filter, useTaskI } from 'features/taskList/model/types.ts'
import { useGetTasksQuery } from 'entities/task'

export function useTasks(): useTaskI {
  const { data: remoteTasks = [] } = useGetTasksQuery()
  // нужен второй стейт для локального удаления
  const [tasks, setTasks] = useState<Task[]>(remoteTasks)
  const [filter, setFilter] = useState<Filter>('all')

  // нужен для копирования в локальный стейт для удаления
  useEffect(() => {
    if (remoteTasks.length > 0 && tasks.length === 0) {
      setTasks(remoteTasks)
    }
  }, [remoteTasks])

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

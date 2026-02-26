import { TaskList, useTasks } from 'features/taskList'

export const TaskWidget = () => {
  const { tasks, removeTask, filter, setFilter } = useTasks()

  return (
    <div>
      <h3>Текущая фильтрация по статусу: {filter}</h3>
      <TaskList tasks={tasks} action={removeTask} setFilter={setFilter} />
    </div>
  )
}

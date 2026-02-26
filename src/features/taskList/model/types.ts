import type { Task } from 'entities/task'

export type Filter = 'all' | 'completed' | 'incomplete'

export interface useTaskI {
  tasks: Task[] // отфильтрованные задачи
  filter: Filter // текущий фильтр
  setFilter: (f: Filter) => void // смена фильтра
  removeTask: (id: string) => void // удаление задачи по ID
}

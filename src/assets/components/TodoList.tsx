import React, { useState } from 'react';
import { Task, FilterType } from '../types/type';
import TodoItem from './TodoItem';

type TodoListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [filter, setFilter] = useState<FilterType>('ALL');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ACTIVE') return !task.isCompleted;
    if (filter === 'COMPLETED') return task.isCompleted;
    return true;
  });

  return (
    <div>
      <div className="filters">
        {['ALL', 'ACTIVE', 'COMPLETED'].map(f => (
          <button key={f} onClick={() => setFilter(f as FilterType)}>
            {f}
          </button>
        ))}
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

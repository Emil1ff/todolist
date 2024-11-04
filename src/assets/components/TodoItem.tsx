import React, { useState } from 'react';
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";


import { Task } from '../types/type';

type TodoItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <div className="todo">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleSave}
          />
        ) : (
          <span
            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="edit-buttons">
        <MdModeEdit 
        className='edit'
        onClick={() => setIsEditing(!isEditing)} 
          />
        <MdOutlineDelete 
        className='delete' onClick={() => onDelete(task.id)} 
        style={{
          cursor: 'pointer'
        }}
        />
      </div>
    </div>
  );
};

export default TodoItem;

import React, { useState } from 'react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;

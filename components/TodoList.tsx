'use client'

import { useState, useRef, useEffect } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: number) => {
    if (editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editText.trim() } : todo
        )
      );
      setEditingId(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-cyan-400/30">
      <h2 className="text-xl font-bold text-white mb-3 text-center">
        To-Do List
      </h2>
      
      <form onSubmit={addTodo} className="mb-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-1.5 text-sm rounded-lg bg-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 border border-slate-600"
            ref={inputRef}
          />
          <button
            type="submit"
            className="px-3 py-1.5 text-sm bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            Add
          </button>
        </div>
      </form>

      <div className="max-h-64 overflow-y-auto pr-1 -mr-1">
        {todos.length === 0 ? (
          <div className="text-center py-6 text-slate-400">
            <p>No tasks yet. Add one above!</p>
          </div>
        ) : (
          <ul className="space-y-1.5">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="group flex items-center justify-between p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex items-center flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-400/50 mr-2 cursor-pointer flex-shrink-0"
                  />
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      ref={editInputRef}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => saveEdit(todo.id)}
                      onKeyDown={(e) => handleKeyDown(e, todo.id)}
                      className="flex-1 bg-slate-700 text-white px-2 py-0.5 text-sm rounded focus:outline-none focus:ring-1 focus:ring-cyan-400/50 w-full"
                    />
                  ) : (
                    <span
                      className={`flex-1 text-sm text-white break-words ${
                        todo.completed ? 'line-through text-slate-400' : ''
                      }`}
                      onDoubleClick={() => startEditing(todo)}
                    >
                      {todo.text}
                    </span>
                  )}
                </div>
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
                  <button
                    onClick={() => startEditing(todo)}
                    className="p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    aria-label="Edit task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-1 text-slate-400 hover:text-red-400 transition-colors duration-200 ml-1"
                    aria-label="Delete task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {todos.length > 0 && (
        <div className="mt-3 text-xs text-slate-400 text-right">
          {todos.filter(t => t.completed).length} of {todos.length} tasks completed
        </div>
      )}
    </div>
  );
}

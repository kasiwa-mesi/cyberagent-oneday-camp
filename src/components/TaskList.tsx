import React from 'react';
import { Task } from '../'

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskList: React.FC<Props> = React.memo(({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  }
  return (
    <ul>
      {tasks.map((tasks, index) => (
        <li key={`todo-${index}`}>
          {tasks.isDone ? <s>{tasks.label}</s> : tasks.label}
          <input
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={tasks.isDone}
          />
        </li>
      ))
      }
    </ul >
  );
});

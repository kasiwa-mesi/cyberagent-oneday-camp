import React from 'react';
import { Task } from '../'
import styled, { keyframes } from "styled-components";

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
      <ListDesign>
        <p>読み込み成功</p>
      </ListDesign>
      <Wrapper>
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
      </Wrapper>
    </ul >
  );
});

const Wrapper = styled.div`
height: 50px;
`

const ListDesign = styled.div`
  z-index: 999;
  width: 500px;
  height: 150px;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    animation: slide 0.3s ease-in-out 0s both;
    background-color: #000;
  }

  p {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 80px;
    font-weight: 900;
    position: absolute;
    left: calc(50vw - 300px);
    top: calc(50vh - 300px);
    animation: poyon 1.1s linear 0s 1, hidden 1s 2s forwards;
    z-index: 999;
    color: #ffffff;
  }

@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}`

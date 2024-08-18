import { useState } from "react";
import "./todo.css";

import { TodoForm } from "./form";
import { TodoList } from "./list";

const todoKey = "todo";

export const Todo = () => {
  const [dateTime, setDateTime] = useState("");

  const getDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    setDateTime(`${date} - ${time}`);
  };

  setInterval(() => {
    getDateTime();
  }, 1000);

  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoMatched) return;
    setTask((prev) => [
      ...prev,
      { id: id, content: content, checked: checked },
    ]);
  };

  localStorage.setItem(todoKey, JSON.stringify(task));

  const handleDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleCheck = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };
  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <>
      <section>
        <header className="text-center">
          <h1 className="text-[40px] font-bold text-white mt-8">Todo List</h1>
          <h2 className="text-[20px] font-bold text-white mt-4">{dateTime}</h2>
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section>
          <ul className="flex justify-center items-center flex-col gap-4">
            {task.map((c, index) => {
              return (
                <TodoList
                  key={c.id}
                  data={c.content}
                  checked={c.checked}
                  onHandleDeleteTodo={handleDelete}
                  onHandleCheckedTodo={handleCheck}
                />
              );
            })}
          </ul>
        </section>
        <section
          className=" border-1 mt-5 px-4 py-2 w-[8rem] text-center rounded-[10px] bg-red-600 font-semibold cursor-pointer m-auto"
          onClick={handleClearAll}
        >
          Clear All
        </section>
      </section>
    </>
  );
};

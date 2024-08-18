import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: "" });
  };


  return (
    <section>
      <form onSubmit={handleFormSubmit} className="flex justify-center my-5">
        <div>
          <input
            type="text"
            className="border-2 border-gray-950 border-r-0 px-4 py-2 w-[9rem] rounded-l-[10px]"
            autoComplete="off"
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="border-2 border-gray-950 px-4 py-2 border-l-0 rounded-r-[10px] bg-cyan-400 font-semibold cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

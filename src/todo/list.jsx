import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <li className="flex items-center justify-between gap-5 w-60 bg-white rounded-[10px] px-3 py-2 ">
      <div>
        <span className={checked ? "line-through" : "no-underline"}>
          {data}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 border-gray-200 px-2 py-2  rounded-[30px] bg-green-500"
          onClick={() => onHandleCheckedTodo(data)}
        >
          <MdCheck />
        </button>
        <button
          className="border-2 border-gray-200 px-2 py-2  rounded-[30px] bg-red-500"
          onClick={() => onHandleDeleteTodo(data)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

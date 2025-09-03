import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function TodoContainer({ item, deleteTask, handleDone}) {

  return (
    <li className={item.done ? "task task--done" : "task"} >
      <p>{item.taskName}</p>

      <button className="done-btn" onClick={() => handleDone(item.id)} disabled={item.done} >
        <MdOutlineDoneOutline /> 
      </button>

      <button className="delete-btn" 
      onClick={() => deleteTask(item.id)}>
        <AiFillDelete />
      </button>
    </li>
  );
};



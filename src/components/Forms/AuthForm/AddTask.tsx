import { useState, useEffect } from "react";
import { IIsEdit, ITask } from "../../../pages/Home/Home";

interface Props {
  isEdit: IIsEdit;
  setNewTasks: any;
  isCompleted: any | undefined;
}

export const AddTask = ({ setNewTasks, isEdit, isCompleted }: Props) => {
  const [enterTask, setTask] = useState("");
  const [enterDate, setDate] = useState("");
  useEffect(() => {
    if (isEdit.isEditMode === true && isEdit.name && isEdit.date) {
      setTask(isEdit.name);
      setDate(isEdit.date);
    }
  }, [isEdit.isEditMode, isEdit.name, isEdit.date]);
  const handleAddTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const handleAddDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewTasks((currentTasks: ITask[]) => {
      if (isEdit.isEditMode === true && isEdit.name) {
        currentTasks.forEach((task: ITask) => {
          if (task.id === isEdit.id) {
            task.name = enterTask;
            task.date = enterDate;
          }
        });
        return [...currentTasks];
      } else {
        const taskToAdd: ITask = {
          id: currentTasks.length + 1,
          name: enterTask,
          date: enterDate,
          isCompleted: isCompleted,
        };
        return [...currentTasks, taskToAdd];
      }
    });
    isEdit.isEditMode = false;
    setTask("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className="">
        <div className="task">
          {/* <label>Task : </label> */}
          <input
            className="w-[100%] outline-none border border-[#dedddd] rounded-md px-1 py-4 mb-3 "
            value={enterTask}
            onChange={handleAddTask}
            type="text"
            placeholder="What do you need to do? "
          />
        </div>
        <div className="date">
          {/* <label htmlFor="date">Date : </label> */}
          <input
            className="w-[100%] outline-none border border-[#dedddd] rounded-md px-1 py-4 mb-3"
            value={enterDate}
            onChange={handleAddDate}
            type="text"
            placeholder="When do you want to do it?"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#3A71CA] text-white  px-4 py-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
};

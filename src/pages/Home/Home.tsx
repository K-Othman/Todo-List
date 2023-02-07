import { useState } from "react";

import { AddTask } from "../../components/Forms/AuthForm/AddTask";

export interface ITask {
  id: number;
  name: string;
  date: string;
  isCompleted: boolean | undefined;
}

export interface IIsEdit {
  isEditMode: boolean;
  id: undefined | number;
  name: undefined | string;
  date: undefined | string;
}

const Home = () => {
  const [isEdit, setIsEdit] = useState<IIsEdit>({
    isEditMode: false,
    id: undefined,
    name: undefined,
    date: undefined,
  });
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      name: "Docotrs Appointment",
      date: "2nd Feb at 2:30pm",
      isCompleted: false,
    },
    {
      id: 2,
      name: "coding ",
      date: "3rd March at 1:30pm",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Cinema ",
      date: "5th March at 9:00pm",
      isCompleted: false,
    },
  ]);

  const onDelete = (id: number) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };

  const onEdit = (id: number, name: string, date: string) => {
    setIsEdit({
      isEditMode: true,
      id: id,
      name: name,
      date: date,
    });
  };

  const onUpdate = (id: number) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isCompleted = true;
      }
    });
  };

  // const [counter, setCounter] = useState(0);

  // const increase = () => {
  //   setCounter((currNum) => {
  //     return currNum + 1;
  //   });
  // };

  // const decrease = () => {
  //   setCounter((currNum) => {
  //     return currNum > 0 ? currNum - 1 : 0;
  //   });
  // };
  // const reset = () => {
  //   setCounter(0);
  // };

  return (
    <div className="flex-grow mx-4  bg-white p-10 rounded-lg">
      <section className="">
        <p className="mb-5 text-xl ">My ToDo List</p>
        <AddTask
          isCompleted={onUpdate}
          isEdit={isEdit}
          setNewTasks={setTasks}
        />
      </section>
      <section>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="tasks mb-2 p-3 ">
              <input
                type={"checkbox"}
                id={task.name + 1}
                onChange={() => {
                  onUpdate(task.id);
                }}
              />
              <p>{task.name}</p>
              <p>{task.date}</p>
              <div className="flex flex-row">
                <button
                  onClick={() => {
                    onEdit(task.id, task.name, task.date);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(task.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
      {/* <button onClick={increase}>+</button>
      <button onClick={decrease}>_</button>
      <button onClick={reset}>Reset</button> */}
      {/* <p>{counter}</p> */}
    </div>
  );
};

export default Home;

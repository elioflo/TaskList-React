/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

export default function TaskList({tasks, removeTask, toggleComplete}) {
  return (
    <div>
      {tasks.map((task, index) => <TaskItem key={index} task={task} remove={() => removeTask(index)} toggle={()=>toggleComplete(index)} />)}
    </div>
  )
}
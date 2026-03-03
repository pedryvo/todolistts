import { timingSafeEqual } from 'crypto';
import { ITask } from '../Interfaces';

interface ITodoTaskProps {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: ITodoTaskProps) => {
  return (
    <div className='task'>
      <div className='content'>
        <span className='taskName'>{task.taskName}</span>
        <span className='deadline'>{task.deadline}</span>
      </div>
      <button className='delete' onClick={
        () => completeTask(task.taskName)
      }>X</button>
    </div>
  )
}

export default TodoTask;

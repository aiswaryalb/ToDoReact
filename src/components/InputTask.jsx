import { useState } from "react"

const InputTask = ({ list, addTask }) => {

  const [task, setTask] = useState({});

  const handleAddTask = (list, task) => {
    const taskObj = {};
    taskObj.id = Date.now();
    taskObj.title = task;
    taskObj.status = "active";
    addTask([...list, taskObj])
  }

  return (
    <div class="mb-12">
      <div class="relative group">
        <div class="flex flex-col md:flex-row gap-3 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl shadow-primary/5 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <input onChange={(e) => { setTask(e.target.value) }}
            class="flex-grow px-6 py-4 bg-transparent border-none focus:ring-0 text-lg placeholder-slate-400 dark:placeholder-slate-500 text-slate-700 dark:text-slate-100"
            placeholder="What needs to be done?" type="text" />
          <button onClick={() => { handleAddTask(list, task) }} class="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
            <span class="material-icons-outlined text-xl">add</span>
            Add to List
          </button>
        </div>
      </div>
    </div>
  )
}
export default InputTask;

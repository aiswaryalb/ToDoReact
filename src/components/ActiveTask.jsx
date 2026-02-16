const ActiveTask = ({ task, onComplete, onDelete }) => {
  return (
    <div class="task-item group flex items-center justify-between p-5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all hover:border-primary/30 dark:hover:border-primary/30">
      <div class="flex items-center gap-4">
        <button onClick={() => onComplete(task.id)} class="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center hover:border-primary transition-colors">
          <div class="w-3 h-3 rounded-full bg-primary opacity-0 transition-opacity"></div>
        </button>
        <span class="text-slate-700 dark:text-slate-200 text-lg font-medium">{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)} class="delete-btn opacity-0 text-slate-400 hover:text-red-500 transition-all p-1">
        <span class="material-icons-outlined">delete_outline</span>
      </button>
    </div>
  )
}
export default ActiveTask;
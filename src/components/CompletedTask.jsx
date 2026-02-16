const CompletedTask = ({ task }) => {
  return (
    <div class="task-item group flex items-center justify-between p-5 bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800 transition-all opacity-60">
      <div class="flex items-center gap-4">
        <button
          class="w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
          <span class="material-icons-outlined text-white text-[16px] font-bold">check</span>
        </button>
        <span class="text-slate-500 dark:text-slate-400 text-lg line-through">{task.title}</span>
      </div>
      <button class="delete-btn opacity-0 text-slate-400 hover:text-red-500 transition-all p-1">
        <span class="material-icons-outlined">delete_outline</span>
      </button>
    </div>
  )
}
export default CompletedTask;
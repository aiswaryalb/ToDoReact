const PendingTasks = ({ list }) => {
  const pendingTasks = list.filter(task => task.status === 'active').length;
  return (
    <div class="flex items-center gap-4">
      <span>{pendingTasks} tasks remaining</span>
    </div>
  )
}
export default PendingTasks;
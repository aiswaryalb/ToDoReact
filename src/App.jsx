import { useEffect, useState } from 'react'
import './App.css'
import ActiveTask from './components/ActiveTask'
import CompletedTask from './components/CompletedTask'
import FooterQuote from './components/FooterQuote'
import Header from './components/Header'
import InputTask from './components/InputTask'
import PendingTasks from './components/PendingTasks'

function App() {

  const [list, addToList] = useState([]);
  const [filter, setFilter] = useState("all");

  const markCompleted = (id) => {
    addToList(prevList =>
      prevList.map(task =>
        task.id === id
          ? { ...task, status: 'inactive' }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    addToList(prevList => prevList.filter(task => task.id !== id));
  };


  const visibleTasks = list.filter(item => {
    if (filter === "active") return item.status === "active";
    if (filter === "completed") return item.status === "inactive";
    return true; // all
  });

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div class="max-w-2xl mx-auto px-6 py-20 lg:py-32">
        <Header title={'Tasks'} description={'Minimalist workflow for your daily goals.'} />
        <InputTask list={list} addTask={addToList} />

        <div className="space-y-3">
          {visibleTasks.map(item =>
            item.status === "active" ? (
              <ActiveTask
                key={item.id}
                task={item}
                onComplete={markCompleted}
                onDelete={deleteTask}
              />
            ) : (
              <CompletedTask
                key={item.id}
                task={item}
              />
            )
          )}
        </div>

        <footer class="mt-12 flex items-center justify-between text-sm font-medium text-slate-400 dark:text-slate-500 px-2">
          <PendingTasks list={list} />
          <div class="flex items-center gap-6">
            <button onClick={() => { setFilter("all") }} class="hover:text-primary transition-colors uppercase tracking-wider text-xs">All</button>
            <button onClick={() => { setFilter("active") }} class="hover:text-primary transition-colors uppercase tracking-wider text-xs">Active</button>
            <button onClick={() => { setFilter("completed") }} class="hover:text-primary transition-colors uppercase tracking-wider text-xs">Completed</button>
          </div>

          <button onClick={() => { addToList([]) }} class="hover:text-red-500 transition-colors">Clear all</button>
        </footer>
        <FooterQuote quote={"Simplicity is the ultimate sophistication."} />
      </div>
      <div class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
      <div class="fixed -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div class="fixed -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </main>
  )
}

export default App

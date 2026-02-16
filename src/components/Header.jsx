const Header = ({title, description}) => {
  return (
    <header class="text-center mb-12">
      <h1 class="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}
      </h1>
      <p class="text-slate-500 dark:text-slate-400 text-lg">
        {description}
      </p>
    </header>
  )
}
export default Header;
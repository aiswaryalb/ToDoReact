const FooterQuote = ({quote}) => {
  return (
    <div class="mt-24 text-center">
      <div class="w-12 h-1 bg-primary/20 mx-auto rounded-full mb-8"></div>
      <p class="text-slate-400 dark:text-slate-600 text-sm italic italic">
        {quote}
      </p>
    </div>
  )
}

export default FooterQuote;
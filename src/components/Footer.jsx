export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-900/10 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} NextGen B.Tech College. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
            <a href="mailto:admissions@nextgen.edu" className="hover:text-gray-900 dark:hover:text-white">admissions@nextgen.edu</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="section-dark py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <p>© {new Date().getFullYear()} AlgoUniversity — School of CS & AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:admissions@algouniversity.com" className="hover:text-white">admissions@algouniversity.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          AI Blog
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-indigo-500 transition-colors">
            Home
          </Link>
          <Link href="/new" className="hover:text-indigo-500 transition-colors">
            New Post
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

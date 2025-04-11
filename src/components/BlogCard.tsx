import Link from 'next/link'

type BlogCardProps = {
  id: string
  title: string
  excerpt: string
  createdAt: string
}

const BlogCard = ({ id, title, excerpt, createdAt }: BlogCardProps) => {
  return (
    <Link
      href={`/blog?id=${id}`}
      className="block border p-6 rounded-md shadow-sm hover:shadow-md transition-shadow bg-white"
    >
      <h2 className="text-xl font-semibold text-indigo-600">{title}</h2>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <p className="text-xs text-gray-400 mt-4">Posted on {createdAt}</p>
    </Link>
  )
}

export default BlogCard

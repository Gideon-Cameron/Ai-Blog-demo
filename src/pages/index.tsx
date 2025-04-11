import Navbar from '@components/Navbar'
import BlogCard from '@components/BlogCard'

type BlogPost = {
  id: string
  title: string
  excerpt: string
  createdAt: string
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Changing Web Development',
    excerpt: 'Explore how artificial intelligence is reshaping the way we build and interact with web applications.',
    createdAt: '2025-04-01',
  },
  {
    id: '2',
    title: 'Tips for Designing with Figma and React',
    excerpt: 'Learn how to turn beautiful Figma designs into pixel-perfect React components using Tailwind CSS.',
    createdAt: '2025-03-28',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
        <div className="space-y-6">
        {mockPosts.map(post => (
         <BlogCard key={post.id} {...post} />
         ))}
        </div>
      </main>
    </>
  )
}

import Navbar from '@components/Navbar'

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800">📝 Blog Post</h1>
        <p className="text-gray-600 mt-4">This is a placeholder for the blog post page. Dynamic loading is coming soon!</p>
      </main>
    </>
  )
}

import { useState } from 'react'
import Navbar from '@components/Navbar'

export default function NewPostPage() {
  const [topic, setTopic] = useState('')
  const [content, setContent] = useState('')

  const handleGenerate = async () => {
    // Eventually this will call OpenAI API
    // For now, mock content
    setContent(`This is a sample blog post about: "${topic}"`)
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">✍️ New AI Blog Post</h1>

        <label className="block mb-2 font-medium text-gray-700">Enter a topic or prompt:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. How AI is changing education"
          className="w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleGenerate}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Generate Blog Post
        </button>

        {content && (
          <div className="mt-8 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Generated Content</h2>
            <p className="text-gray-800 whitespace-pre-line">{content}</p>
          </div>
        )}
      </main>
    </>
  )
}

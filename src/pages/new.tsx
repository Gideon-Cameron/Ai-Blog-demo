import { useState } from 'react'
import Navbar from '@components/Navbar'

export default function NewPostPage() {
  const [topic, setTopic] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('') // for publish feedback

  const handleGenerate = async () => {
    setContent('')
    setStatus('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      })

      const data = await response.json()

      if (response.ok && data.content) {
        console.log('✅ Blog Generated Successfully')
        setContent(data.content)
      } else {
        console.warn('⚠️ API responded but no content was returned:', data)
        setContent('⚠️ Failed to generate content. Please try again.')
      }
    } catch (error) {
      console.error('❌ API request failed:', error)
      setContent('⚠️ Something went wrong while calling the API.')
    }
  }

  const handlePublish = async () => {
    setStatus('Publishing...')

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: topic,
          content,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('✅ Post saved to database')
        setStatus('✅ Post published successfully!')
        // Optional: clear inputs after publishing
        setTopic('')
        setContent('')
      } else {
        console.warn('⚠️ Failed to publish post:', data)
        setStatus('❌ Failed to publish post.')
      }
    } catch (error) {
      console.error('❌ Error publishing post:', error)
      setStatus('❌ Error publishing post.')
    }
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
          placeholder="e.g. How AI is changing education."
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
            <p className="text-gray-800 whitespace-pre-line mb-4">{content}</p>

            <button
              onClick={handlePublish}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Publish Post
            </button>

            {status && (
              <p className="mt-4 text-sm text-gray-600">{status}</p>
            )}
          </div>
        )}
      </main>
    </>
  )
}

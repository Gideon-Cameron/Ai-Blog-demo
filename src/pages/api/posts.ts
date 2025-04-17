import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@lib/mongodb'
import PostModel from '@models/Post'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { title, content } = req.body

  if (!title || !content) {
    return res.status(400).json({ message: 'Missing title or content' })
  }

  try {
    await connectToDatabase()

    const newPost = await PostModel.create({ title, content })

    return res.status(201).json({
      message: 'Post created successfully',
      post: newPost,
    })
  } catch (error) {
    console.error('❌ Error creating post:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

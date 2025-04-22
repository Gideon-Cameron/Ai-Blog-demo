import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { topic } = req.body

  if (!topic || typeof topic !== 'string') {
    return res.status(400).json({ message: 'Invalid topic.' })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional blog writer.',
        },
        {
          role: 'user',
          content: `Write a complete blog post about: "${topic}"`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const blogContent = completion.choices[0]?.message?.content
    console.log('🔍 Generated blog content:', blogContent)
    res.status(200).json({ content: blogContent })
  } catch (error) {
    console.error('❌ OpenAI error:', error)
    res.status(500).json({ message: 'Failed to generate blog content.' })
  }
}

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is not defined in .env.local')
}

// Use cached connection to prevent multiple connections during hot reloads
let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: 'ai-blog',
      bufferCommands: false,
    })
  }

  try {
    cached.conn = await cached.promise
    console.log('✅ Connected to MongoDB')
    return cached.conn
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

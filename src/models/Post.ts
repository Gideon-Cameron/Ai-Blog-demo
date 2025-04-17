import mongoose, { Schema, models, model } from 'mongoose'

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
)

// Avoid model overwrite error in dev
const PostModel = models.Post || model('Post', PostSchema)

export default PostModel

import mongoose from 'mongoose';

/**
 * Schema for the Post object in MongoDB
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  picture: String,
  color: String,
});

const SourceSchema = new Schema({
  startName: String,
  endName: String,
  linkName: String,
  link: String,
});

const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['discovery', 'blog', 'retrospective'],
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  tags: [
    {
      type: TagSchema,
    },
  ],
  preview: {
    type: Array,
    required: true,
  },
  previewString: {
    type: String,
    required: true,
  },
  sources: [
    {
      type: SourceSchema,
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
});

PostSchema.index({ name: 1 });
PostSchema.index({ date: 1 });

PostSchema.index(
  {
    name: 'text',
    title: 'text',
    type: 'text',
    date: 'text',
    'tags.name': 'text',
    previewString: 'text',
    'sources.startName': 'text',
    'sources.endName': 'text',
    'sources.linkName': 'text',
    'sources.link': 'text',
  },
  {
    name: 'post-text-index',
    default_language: 'none',
    weights: {
      name: 100,
      title: 100,
      type: 10,
      date: 5,
      'tags.name': 5,
      previewString: 2,
      'sources.startName': 1,
      'sources.endName': 1,
      'sources.linkName': 1,
      'sources.link': 1,
    },
  },
);

export default mongoose.model('Post', PostSchema, 'posts');

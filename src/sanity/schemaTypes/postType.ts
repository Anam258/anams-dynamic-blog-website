import { defineArrayMember, defineField, defineType } from 'sanity'

// types/index.ts

export interface Author {
  _id: string; // Add _id for reference handling
  name: string;
  description?: string;
  image?: {
    _ref: string;
    _type: "reference";
  };
}

export interface Post {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  body: BlockContent[]; // Use 'BlockContent[]' to correctly type the body of the post
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string; // Alt text for image (optional)
  };
  author: Author; // Add reference to Author
  categories: Array<{ title: string }>; // Categories should contain an array of objects
  publishedAt: string; // Published date field (datetime)
}

export type BlockContent = {
  _key: string;
  _type: "block";
  children: Array<{
    _key: string;
    _type: "span";
    text: string;
    marks: string[]; // Marks are optional style identifiers
  }>;
  style: string; // The style of the block (e.g., "normal", "h1", etc.)
};

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' }, // Reference to author document
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true, // To allow cropping of the image in the CMS
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text', // Optional alt text for the image
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })], // Reference to 'category' documents
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime', // Published date for the post
    }),
    defineField({
      name: 'body',
      type: 'array',  // Since the body is an array of blocks, use 'array' here
      of: [defineArrayMember({ type: 'block' })], // Block content type for rich text
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` }; // Add author name to the preview
    },
  },
});

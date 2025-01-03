import { PortableText } from '@portabletext/react';
import { createClient } from '../../lib/createClient';
import Image from 'next/image';

const client = createClient();

// Defining Post type with more specific types
type Post = {
  title: string;
  body: any; // You might want to replace `any` with a more specific type like 'PortableTextBlock[]' or something similar
  mainImage: { asset: { _ref: string } };
  publishedAt: string;
  slug: string;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      {post.mainImage && (
        <div>
          <Image
            src={post.mainImage?.asset._ref} // Make sure this is a valid URL
            alt={post.title}
            width={800}
            height={500}
            layout="intrinsic"
          />
        </div>
      )}

      <div>
        <PortableText value={post.body} components={customPortableTextComponents} />
      </div>

      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
    </div>
  );
}

// Using PortableText components with more specific types
const customPortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string } } }) => (
      <div>
        <Image
          src={value.asset._ref}
          alt="Image"
          width={600}
          height={400}
          layout="intrinsic"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

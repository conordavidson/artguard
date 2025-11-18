import * as SanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

import { defineQuery } from 'groq';

export const client = SanityClient.createClient({
  projectId: 'la9s93b5',
  dataset: 'production',
  apiVersion: '2025-11-17',
  useCdn: false,
});

export const imageBuilder = imageUrlBuilder(client);

const IMAGE_QUERY = `
  ...,
  asset -> {
    ...
  }
`;

const RICHTEXT_QUERY = `
  ...,
  _type == "image" => {
    ${IMAGE_QUERY}
  }
`;

const POST_QUERY = `
  ...,
  author -> {
    name,
    slug,
  },
  tags[] -> {
    title,
    slug,
  },
  coverImage {
    ${IMAGE_QUERY}
  },
  content[] {
    ${RICHTEXT_QUERY}
  },
`;

const INDEX_POSTS_QUERY = defineQuery(
  `*[_type == "post"] | order(publishedAt desc) { ${POST_QUERY} }`
);

const GET_POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] { ${POST_QUERY} }`
);

export const Posts = {
  index: () => client.fetch(INDEX_POSTS_QUERY),
  getBySlug: (slug: string) => client.fetch(GET_POST_BY_SLUG_QUERY, { slug }),
};

export * as Types from './types';

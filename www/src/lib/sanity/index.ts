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

const ANNOUNCEMENT_QUERY = `
  ...,
  content[] {
    ${RICHTEXT_QUERY}
  },
`;

const SETTINGS_QUERY = `
  ...,
  activeAnnouncement -> {
    ${ANNOUNCEMENT_QUERY}
  },
`;

const INDEX_POSTS_QUERY = defineQuery(
  `*[_type == "post"] | order(publishedAt desc) { ${POST_QUERY} }`
);

const GET_POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] { ${POST_QUERY} }`
);

const GET_SETTINGS_QUERY = defineQuery(
  `*[_type == "settings" && _id == "settings"][0] { ${SETTINGS_QUERY} }`
);

export const Globals = {
  get: async () => {
    const [settings] = await Promise.all([client.fetch(GET_SETTINGS_QUERY)]);

    if (!settings) {
      throw new Error('No settings found');
    }

    return {
      settings,
    };
  },
};

export const Posts = {
  index: () => client.fetch(INDEX_POSTS_QUERY),
  getBySlug: (slug: string) => client.fetch(GET_POST_BY_SLUG_QUERY, { slug }),
};

export * as Types from './types';

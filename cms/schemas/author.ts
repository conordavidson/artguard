import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Author = Sanity.defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: Icons.Author,
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    },
  ],
});

export default Author;

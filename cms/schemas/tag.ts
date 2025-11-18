import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Tag = Sanity.defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: Icons.Tag,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
  ],
});

export default Tag;

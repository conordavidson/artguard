import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Announcement = Sanity.defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: Icons.Announcement,
  preview: {
    select: {
      content: 'content',
    },
  },
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'href',
          title: 'Href',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
});

export default Announcement;
